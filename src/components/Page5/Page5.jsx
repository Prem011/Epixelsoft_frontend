import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Page5 = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = async (data) => {
    console.log("Form data:", data); // Log form data to console
    reset(); // Optional: Resets form fields after submission
    toast.success("Thankyou for Signing up!");
  };

  return (
    <>
      <div className="mx-[4%] h-[90%]">
        <h1 className="text-[6vw] md:text-[3vw] font-bold text-center mt-[5%]">
          Ready to take a free trial?
        </h1>
        <h3 className="text-[4vw] md:text-[1.6vw] mt-[2%] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate rem nam culpa voluptatem.
          <br />
          Asperiores illum animi iste nesciunt.
        </h3>

        <div className="h-[55%] flex justify-center">
          <div className="w-full md:w-[50%] lg:w-[40%] mt-[5%] border border-black px-[5%] py-[3%]">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <h1 className="text-[6vw] md:text-2xl font-semibold mb-[5%]">
                Sign up for free account
              </h1>

              <div className="flex justify-between flex-col md:flex-row  gap-[7%]">
                <label className="w-[45%] flex flex-col md:flex-row gap-[7%]">
                  <input
                    type="text"
                    className="grow  border-2 border-zinc-400 p-2 w-full md:w-[50%] mt-[2%]"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  />
                </label>
                {errors.firstName && <span className="text-red-500 text-sm">First name is required</span>}

                <label className="w-[45%] flex flex-col md:flex-row gap-[7%]">
                  <input
                    type="text"
                    className="grow  border-2 border-zinc-400 p-2 w-full md:w-[50%] mt-[2%]"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                  />
                </label>
                {errors.lastName && <span className="text-red-500 text-sm">Last name is required</span>}
              </div>

              <div className="justify-between flex flex-col md:flex-row gap-[7%] mt-[4%]">
                <label className="w-[45%] flex flex-col md:flex-row gap-[7%]">
                  <input
                    type="text"
                    className="grow  border-2 border-zinc-400 p-2 w-full md:w-[50%] mt-[2%]"
                    placeholder="Email address"
                    {...register("email", { required: true })}
                  />
                </label>
                {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

                <label className="w-[45%] flex flex-col md:flex-row gap-[7%]">
                  <input
                    type="text"
                    className="grow  border-2 border-zinc-400 p-2 w-full md:w-[50%] mt-[2%]"
                    placeholder="Phone Number"
                    {...register("phoneNumber", { required: true })}
                  />
                </label>
                {errors.phoneNumber && <span className="text-red-500 text-sm">Phone number is required</span>}
              </div>

              <label className="flex flex-col md:flex-row gap-[7%]">
                <input
                  type="password"
                  className="grow  border-2 border-zinc-400 p-2 w-full md:w-[50%] mt-[5%]"
                  placeholder="Create Password"
                  {...register("password", { required: true })}
                />
              </label>
              {errors.password && <span className="text-red-500 text-sm">Password is required</span>}

              <button className="w-full md:w-[30%] mt-[6%] px-4 py-2 text-white bg-blue-400 border border-blue-400 rounded-md hover:text-blue-400 hover:bg-white transition">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="h-auto px-[5vw] py-[2vw] bg-zinc-800 text-white">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="h-[3vw] flex gap-3 items-center">
            <img
              className="w-[8vw] h-[8vw] lg:w-[3vw] lg:h-[3vw]"
              src="https://img.icons8.com/?size=100&id=EJd7fIRQdV6e&format=png&color=ffffff"
              alt="Logo"
            />
            <h1 className="text-[5vw] lg:text-2xl">Logo</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-[8%] mt-[5vw] lg:mt-0">
            <div className="w-[8vw] flex flex-col gap-2">
              <h1 className="font-bold mb-[1vw]">Mobile app</h1>
              <Link className="text-zinc-300">Features</Link>
              <Link className="text-zinc-300">Live share</Link>
              <Link className="text-zinc-300">Video record</Link>
            </div>

            <div className="w-[8vw] flex flex-col gap-2">
              <h1 className="font-bold mb-[1vw]">Community</h1>
              <Link className="text-zinc-300">Featured artist</Link>
              <Link className="text-zinc-300">Portal</Link>
              <Link className="text-zinc-300">Live events</Link>
            </div>

            <div className="w-[8vw] flex flex-col gap-2">
              <h1 className="font-bold mb-[1vw]">Company</h1>
              <Link className="text-zinc-300">About us</Link>
              <Link className="text-zinc-300">Contact us</Link>
              <Link className="text-zinc-300">History</Link>
            </div>

            <div className="w-[8vw] flex flex-col gap-3 justify-center mt-[3vw] lg:mt-0">
              <button className="px-4 py-2 text-white bg-blue-400 border border-blue-400 rounded-md hover:text-blue-400 hover:bg-white transition">
                Register
              </button>
              <button className="px-4 py-2 bg-white text-blue-400 border border-blue-400 rounded-md hover:text-white hover:bg-blue-400 transition">
                Login
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-[4.5vw]" />

        <div className="flex flex-col lg:flex-row justify-between mt-[2vw] items-center">
          <h1 className="text-center lg:text-left">&copy; Photo, inc. 2019. We love our users!</h1>
          <div className="flex justify-center lg:justify-start items-center gap-[1vw] mt-[2vw] lg:mt-0">
            <h1>Follow us :</h1>
            <img
              className="w-[6vw] lg:w-[2vw]"
              src="https://img.icons8.com/?size=100&id=60440&format=png&color=ffffff"
              alt="Facebook"
            />
            <img
              className="w-[6vw] lg:w-[2vw]"
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=ffffff"
              alt="Twitter"
            />
            <img
              className="w-[6vw] lg:w-[2vw]"
              src="https://img.icons8.com/?size=100&id=8824&format=png&color=ffffff"
              alt="Instagram"
            />
            <img
              className="w-[6vw] lg:w-[2vw]"
              src="https://img.icons8.com/?size=100&id=8808&format=png&color=ffffff"
              alt="YouTube"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
