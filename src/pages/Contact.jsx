import React from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("");

    

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "36636bb3-6330-4fc3-93e0-17c3545ed3b7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <>
     <h1 className='font-arial font-bold text-3xl pl-10 -mt-3'>
     <span className='underline underline-offset-[1rem] decoration-yellow-400 decoration-4 '>Co</span>ntact</h1>
    
    <div className='bg-[#1e1e1e] text-white/70 p-6 font-sans ml-6 mt-7 rounded-xl'>
       


      
        <p className='mb-4'>
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="w-full h-[300px] overflow-hidden rounded-xl shadow-md">
            
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.9923001324591!2d76.42371794187156!3d30.350256052694405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910286f238c19e9%3A0x7dda89a2349e96fb!2s439%2C%20Jagtar%20Nagar%2C%20Gur%20Baksh%20Colony%2C%20Patiala%2C%20Punjab%20147003!5e0!3m2!1sen!2sin!4v1750417253820!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0, filter: "grayscale(100%) invert(100%) contrast(90%)" }}
    allowFullScreen=""
    loading="lazy"
    className="w-full h-full"
  ></iframe>
</div>




        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12" onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Full name"
      className="bg-black/20 p-3 rounded-md border border-gray-600 text-white placeholder-gray-400/60"
    />
    <input
      type="email"
      placeholder="Email address"
      className="bg-black/20 p-3 rounded-md border border-gray-600 text-white placeholder-gray-400/50"
    />
    <textarea
      placeholder="Your Message"
      className="bg-black/20 p-3 rounded-md border border-gray-600 text-white placeholder-gray-400/50 md:col-span-2"
      rows="5"
    ></textarea>
    <button className="bg-yellow-400/60 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md md:col-span-2 w-fit ml-auto flex items-center gap-2">
      ✈️ Send Message
    </button>

    <span className="block font-bold py-3">{result}</span>
  </form>
  

        <p className='mb-4'>
            You can contact me via email at <a href="mailto:jasssaini8900@gmail.com" className="text-yellow-400">jasssaini8900@gmail.com</a>.
        </p>
    </div>
    </>
  )
}

export default Contact