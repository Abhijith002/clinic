function Location(props) {
  return (
    <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62369.202070154606!2d76.60067039908859!3d12.310727378888892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf701103f9a1f9%3A0xc37fbae2a124da0d!2sMysore%20Palace!5e0!3m2!1sen!2sin!4v1647170503007!5m2!1sen!2sin"
        ></iframe>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Contact Info
        </h2>
        <p className="text-xs text-gray-500 mb-5">
          You can get in touch with us using any of the below means.
        </p>
        <div className="relative mb-4">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Mysore Palace Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru,
            Karnataka 570001
          </p>
        </div>
        <div className="relative mb-4">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-green-500 leading-relaxed">example@email.com</a>
        </div>
        <div className="relative mb-4">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            PHONE
          </h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
