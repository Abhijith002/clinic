import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import Banner from "../components/banner";
import Calendar from "../components/calendar";
import Gallery from "../components/gallery";
import Header from "../components/header";
import UserDetails from "../components/userDetails";
import Location from "../components/location";
import Footer from "../components/footer";

export async function getServerSideProps(context) {
  try {
    // Process a GET request
    const URL = "mongodb://localhost:27017";
    // Create a new MongoClient
    const client = new MongoClient(URL);
    try {
      await client.connect();
      // Establish and verify connection
      const result = await client
        .db("medic")
        .collection("slots")
        .find({
          date: {
            $gte: new Date(
              new Date().setHours(Number("00"), Number("00"), Number("00"))
            ),
          },
        })
        .toArray();

      if (!result || (result && result.length === 0)) {
        return {
          props: {
            result: [
              {
                notFound: true,
                id: "dummy1",
                date: new Date().toDateString(),
                housefull: false,
                slots: [],
              },
            ],
          },
        };
      }

      return {
        // props: { result }, // will be passed to the page component as props
        props: {
          result: result.map((doc) => ({
            id: doc._id.toString(),
            date: doc.date.toString(),
            housefull: doc.housefull,
            slots: doc.slots,
          })), // will be passed to the page component as props
        },
      };
    } finally {
      await client.close();
    }
  } catch (error) {
    console.log("Error while fetching data");
  }
}

export default function Home({ result }) {
  console.log(result);
  return (
    <Fragment>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <Header />
          <Banner />
          {/* </div>
      </div> */}
          {/* <!-- features - start --> */}
          <div
            id="appointment"
            className="bg-white py-6 sm:py-8 lg:py-12 2xl:mt-20"
          >
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              {/* <!-- text - start --> */}
              <div className="mb-10 md:mb-16">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                  Book Appointment
                </h2>

                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                  Please select the date and time, enter the full name and phone
                  number to book an appointment.
                </p>
              </div>
              <section className="flex flex-col lg:flex-row justify-evenly gap-6 sm:gap-10 md:gap-16 border rounded-lg">
                {/* <!-- text - end --> */}
                <Calendar slots={result} />
                {/* <UserDetails /> */}
              </section>
            </div>
          </div>
          <div id="gallery" className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <Gallery />
            </div>
          </div>
          <div id="location" className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div className="mb-10 md:mb-10">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                  Location
                </h2>
              </div>
              <section className="text-gray-600 body-font relative">
                <Location />
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
