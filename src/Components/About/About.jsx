import parts from "../../assets/images/about_us/parts.jpg";
import person from "../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className='md:mx-24 my-14'>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div className='lg:mr-8'>
          <div>
            <div className='relative'>
              <img
                className='pr-14  rounded-lg'
                src={person}
                alt='person-image'
              />
              <img
                className='max-w-sm h-72 absolute -bottom-16 -right-10 border-8 rounded-lg border-white'
                src={parts}
                alt='parst-image'
              />
            </div>
          </div>
        </div>
        <div className='lg:ml-14 p-10 '>
          <h2 className='text-xl font-extrabold text-[#ff3811] '>About Us</h2>
          <p className='text-5xl font-bold my-5'>
            We are qualified <br /> of experience <br /> in this field.
          </p>
          <div className='mt-3 space-y-3 text-lg text-gray-500'>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable
            </p>
          </div>
          <div className='mt-8'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ff3811] hover:bg-indigo-700'
            >
              Get More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
