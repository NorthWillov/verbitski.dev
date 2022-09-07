import React from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <div className="paper-bg mt-16">
        <Container>
          <h1 className="text-8xl pt-20">About</h1>
          <hr className="border-accent-1 border-2" />
          <div className="md:flex my-16 md:justify-between text-xl">
            <div className="md:w-6/12 self-center">
              <p className="mb-5">
                I’m a Ukrainian 🇺🇦 web developer passionate about application
                development, system security, and design.
              </p>
              <p className="mb-10">
                I am currently on my final year of university ‘Wyższa Szkoła
                Bankowa’ based in Gdańsk, Poland 🇵🇱.<br></br>
                The subject I’m studying is Computer Science with a Cyber
                Security speciality
              </p>
              <div className="mb-16">
                <svg
                  width="400"
                  height="40"
                  viewBox="0 0 400 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#303133"
                    d="M11.547 40L0 20 11.547 0h360.467v40z"
                  />
                  <text
                    fill="#E8E8E8"
                    fontFamily="Lato, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif"
                    fontSize="20"
                    x="77"
                    y="27"
                  >
                    NorthWillov
                  </text>
                  <path
                    fill="#1D1D1F"
                    d="M294.547 40L283 20l11.547-20h93.906L400 20l-11.547 20z"
                  />
                  <text
                    fill="#AAA"
                    fontFamily="Lato, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif"
                    fontSize="14"
                    textAnchor="middle"
                    x="322"
                    y="25"
                  >
                    762
                  </text>
                  <path
                    fill="#B92F21"
                    d="M384.497 5h-24.994A2.51 2.51 0 0 0 357 7.503v24.994A2.51 2.51 0 0 0 359.503 35h24.994A2.51 2.51 0 0 0 387 32.497V7.503A2.51 2.51 0 0 0 384.497 5zm.568 17.828c-.123.122-.24.25-.408.423.24 1.448-.707 2.307-1.747 3.11a255.023 255.023 0 0 1-3.263 2.49c-.245.184-.544.293-.82.438-.683 1.886-.941 2.118-2.388 2.085-.346.93-1.034 1.301-2.034 1.039-.067-.018-.17-.076-.192-.054-.973 1-2.089.23-3.102.164-.75-.049-1.508-.53-2.183-.947-.57-.352-.974-1-1.784-.813a.14.14 0 0 1-.1-.02c-.782-.565-1.726-.218-2.519-.43-1.028-.276-1.942-.995-2.883-1.56-.141-.084-.17-.365-.24-.558-.049-.13-.05-.358-.125-.384-1.028-.35-.99-1.328-1.33-2.11-.316-.727-.535-1.378-.134-2.133.094-.178.09-.477.01-.67-.518-1.238-.53-1.234-.402-2.465-1.063-.906-1.22-1.594-.356-2.686-.346-.784-.52-1.576.425-2.142.07-.043.094-.18.12-.279.308-1.21 1.222-1.971 2.182-2.566.88-.546 1.95-.682 2.53-1.783.217-.411.89-.652 1.024-1.279.032-.148.197-.293.336-.387.693-.463 1.502-.702 2.135-1.328.266-.262 1.008-.043 1.712-.043.936-1.169 2.221-.219 3.408-.067.561.071 1.063.571 1.605.852.238.124.503.204.765.27.165.04.368-.036.516.028.832.361 1.66.596 2.566.247.124-.048.403.047.474.16.582.93 1.76.63 2.473 1.234.205.174.238.55.377.904.681.223 1.425.491 1.245 1.511.73.45.252 1.4.797 1.927-.575 1.257.765 2.304.389 3.623.178.123.447.236.605.437.227.288.61.788.515.94-.583.932.68 1.957-.199 2.822zm-13.358-11.386c-1.385.513-1.401.537-1.092 1.779-.673.3-1.08.787-.725 1.605a.443.443 0 0 1-.054.383c-.319.374-.258.72-.093 1.152.09.238-.088.58-.144.87.295.407.616.795.869 1.224.095.16.119.523.021.6-.15.12-.47.159-.651.08-.725-.316-1.487-.605-2.114-1.068-.49-.363-.834-.946-1.183-1.47-.255-.384-.413-.831-.709-1.446.066-.13.238-.453.392-.784.108-.234.33-.529.262-.708-.196-.527.18-.932.188-1.361.022-1.112 1.25-1.337 1.473-2.249 1.188-.523 2.287-1.385 3.724-.959.223.067.466.062.67.087.259.524-.02.813-.282 1.158-.24.315-.365.718-.552 1.107zm8.605.969l1.386 1.227.368 1.626-.211.166c-.923-.602-2.094.066-2.986-.716-.068-.06-.203-.078-.3-.063-.893.136-1.83.155-2.667.455-1.576.566-3.02 1.401-4.025 3.022-.69-.731-.682-1.482-.525-2.225.153-.718.408-1.414.636-2.18.872.01.833-.808 1.071-1.292 1.94-.746 3.806-1.559 6.001-.786.208.483.611.982 1.252.766zm-8.393 8.495c.775 1.676.215 3.145-.484 4.53-.298.392-.599.784-.894 1.18-.083.11-.152.33-.227.33-1.043-.002-1.667 1.036-2.766 1.025-.881-.009-1.72.159-2.623-.148-1.054-.36-1.897-.905-2.683-1.683-.644-.635-.813-1.256-.581-2.083h2.114c.506.618 1.223.956 2.148.405.152-.09.395-.02.593-.045.402-.05.806-.09 1.2-.18.387-.089.763-.233 1.144-.351.131-.041.302-.039.39-.123a49.786 49.786 0 0 0 1.625-1.634c.331-.35.629-.734 1.044-1.223zm-8.55-7.412c-.099.867.008 1.546.824 1.968-.32.9-.38 1.692.727 2.013.062.018.157.07.161.113.082.988.949 1.092 1.583 1.528 1.013.699 2.025 1.145 3.268.997.203-.024.422.079.653.127-.126.997-.883 1.466-1.499 1.685-1.169.417-2.355 1.182-3.725.514-.262-.127-.667.039-.898.06-1.429-.664-2.115-2.04-3.314-2.925.057-.62.518-1.347-.268-1.765.193-1.892.87-3.372 2.488-4.315zm17.403 12.717c-.134-.358-.343-.631-.3-.856.132-.688-.138-1.144-.732-1.52.273-.84-.014-1.456-.766-1.903-.17-.101-.314-.365-.337-.57-.068-.581-.374-.862-.934-.932-.166-.02-.396-.048-.476-.16-.808-1.117-2.061-1.097-3.228-1.3-.281-.048-.564-.087-.875-.134.086-1.003.891-1.294 1.415-1.487 1.198-.44 2.504-1.041 3.787-.495 1.02.436 2.277.51 2.952 1.654.207.351.683.544 1.035.808l.643 1.978v2.056c-.548.829-.966 1.976-2.184 2.86zm-11.883 3.506c1.956.027 2.165-.1 2.604-1.54.833-.277 1.549-.712 1.559-1.778.001-.13.202-.259.31-.388.132-.157.358-.302.379-.473.153-1.27.427-2.548-.018-3.816-.176-.502-.374-.998-.637-1.697.512.051.852.02 1.142.126 1.23.452 2.217 1.278 2.987 2.302.363.482.459 1.164.734 1.915-.303.446-.444 1.092.117 1.747-.739.6-1.123 1.303-1.004 2.12l-1.8 1.728-1.567.697c-.495.094-.979.23-1.47.264-.473.034-1.046.12-1.409-.097-.603-.359-1.57-.088-1.927-1.11z"
                  />
                  <path
                    fill="#141414"
                    d="M62.237 31.45L68.61 20 62.237 8.55H16.41L10.037 20l6.373 11.45z"
                  />
                  <text
                    fill="#3C7EBB"
                    fontFamily="Lato, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif"
                    fontSize="14"
                    x="32"
                    y="18.77"
                    textAnchor="middle"
                    transform="translate(7 6)"
                  >
                    4 kyu
                  </text>
                  <path
                    fill="#3C7EBB"
                    d="M15.083 34L7 20l8.083-14H63.58l8.083 14-8.083 14H15.083zm46.614-3.233L67.919 20 61.697 9.233H16.95L10.728 20l6.222 10.767h44.747z"
                  />
                </svg>
              </div>
              <div className="flex">
                <Link href="/contact">
                  <a className="text-lg text-white bg-accent-3 p-3 rounded-lg w-5/12 text-center">
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:w-4/12 mt-10 md:mt-0">
              <img
                className="rounded-3xl"
                src="/assets/artem_baby.jpeg"
                alt="artem"
              />
            </div>
          </div>

          <hr className="border-accent-1 border-2" />

          <div className="md:flex text-xl md:justify-between py-16">
            <div className="md:w-4/12">
              <img
                className="rounded-3xl"
                src="/assets/laptop.jpeg"
                alt="laptop"
              />
            </div>
            <div className="md:w-6/12 mt-10 md:mt-0 self-center">
              <h3 className="text-4xl mb-5">Web Development</h3>
              <p className="mb-5">
                Also known as website development, refers to the tasks
                associated with creating, building, and maintaining websites and
                web applications that run online on a browser. It may, however,
                also include web design, web programming, and database
                management.
              </p>
              <p className="mb-10">
                I like to use modern instruments for web development, and I
                gladly would talk to you about your project from an existing one
                or brand new from scratch 😉
              </p>
              <div className="flex">
                <Link href="/contact">
                  <a className="text-lg text-white bg-accent-3 p-3 rounded-lg w-5/12 text-center">
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <hr className="border-accent-1 border-2" />

          <div className="md:flex text-xl md:justify-between py-16">
            <div className="md:w-6/12 self-center">
              <h3 className="text-4xl mb-5">Cyber Security</h3>
              <p className="mb-5">
                Like many people I don't like to be scammed. The reason I am
                passionate about cyber security is helping a good society from
                bad guys. Security nowadays is fragile and I can and will make
                it solid.
              </p>
              <p className="mb-10">
                Analyze, investigate, respond, and recover from/to cybersecurity
                incidents, events, and threats as per the incident response
                lifecycle. Remediate infrastructure vulnerabilities and guide
                engineering teams to take preventative measures
              </p>
              <div className="flex">
                <Link href="/contact">
                  <a className="text-lg text-white bg-accent-3 p-3 rounded-lg w-5/12 text-center">
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:w-4/12 mt-10 md:mt-0">
              <img className="rounded-3xl" src="/assets/kali.jpeg" alt="kali" />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default About;