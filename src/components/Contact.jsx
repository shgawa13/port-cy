import React from "react";
import img from "../assets/images/contact-img.svg";

function Contact() {
  return (
    <>
     <div className="contact bg-gradient-to-tr from-orange-600 via-orange-500 to-fuchsia-400">
        <div className="wrapper flex justify-center py-16 gap-52 lg:py-12">
          <div class="imgbox lg:hidden">
            <img class="w-[300px] h-full zoom" src="/src/assets/images/contact-img.svg" alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-slate-50 font-bold text-4xl">Get In Touch</h1>
            <form action="" className="flex flex-col">
              <div className="flex gap-4 py-2">
                <input
                  className="bg-white h-14 rounded-2xl border-[2px] border-black pl-4 text-black placeholder-black lg:w-36"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-white h-14 rounded-2xl border-[2px] border-black pl-4 text-black placeholder-black lg:w-36"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-4 py-4">
                <input
                  className="bg-white h-14 rounded-2xl border-[2px] border-black pl-4 text-black placeholder-black lg:w-36"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="bg-white h-14 rounded-2xl border-[2px] border-black pl-4 text-black placeholder-black lg:w-36"
                  type="phone"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="bg-white rounded-2xl border-[2px] border-black h-36 pl-4 text-black w-full placeholder-black pt-2"
                rows={40}
                cols={35}
                placeholder="Message"
              ></textarea>
              <button className="bg-white border-slate-900 border-[2px] py-[16px] rounded-lg px-8 my-8 w-32 font-bold">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
