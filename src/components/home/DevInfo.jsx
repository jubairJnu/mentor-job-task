import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Link } from "react-router-dom";

const DevInfo = () => {
  return (
    <div className="w-full max-w-7xl px-5 mx-auto mt-16">
      <h1 className="text-foreground text-[28px] font-bold text-center py-5">
        Dev Info
      </h1>

      <div className="flex w-full flex-col ">
        <Tabs aria-label="Options" color="primary" variant="bordered">
          <Tab key="photos" title="Education">
            <Card >
              <CardBody>
                <div className="flex justify-between items-center shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)]  p-5 rounded">
                  <div>
                    <p className="text-lg font-bold">
                      B.S.S Honors{" "}
                      <span className="font-normal">(Political Science)</span>
                    </p>
                    <p className="text-lg ">Jagannath University</p>
                  </div>
                  <p className="text-lg font-semibold">2021 - Present</p>
                </div>

                {/* hsc */}
                <div className="flex justify-between items-center shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)]  p-5 rounded my-5">
                  <div>
                    <p className="text-lg font-bold">HSC</p>
                    <p className="text-lg ">Cantonment College, Jashore</p>
                  </div>
                  <p className="text-lg font-semibold">2018 - 2020</p>
                </div>
                {/* ssc */}
                <div className="flex justify-between items-center shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)]  p-5 rounded my-5">
                  <div>
                    <p className="text-lg font-bold">SSC</p>
                    <p className="text-lg ">Jaforia Madrasha</p>
                  </div>
                  <p className="text-lg font-semibold">2016 - 2018</p>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Experience">
            <Card>
              <CardBody className="w-full px-5 ">
                <div className="font-semibold mb-5  ">
                  <p className="text-foreground-700">
                    I have no job experience in web development field. But
                    I&rsquo;ve completed some full stack website for real customer.{" "}
                  </p>
                  <p className="text-foreground-900">
                    If you interested, Plese check in following
                  </p>
                </div>
                <div>
                  <li className="text-blue-500 font-semibold">
                    <span className="text-foreground ">
                      LMS:{" "}
                      <Link
                        className="text-blue-600"
                        to="https://www.bdsoe.com/"
                      >
                        {" "}
                        Click Here{" "}
                      </Link>
                    </span>
                  </li>
                  <li className="text-orange-500 font-semibold">
                    <span className="text-foreground ">
                      Hospital Management:{" "}
                      <Link
                        className="text-blue-600"
                        to="https://www.dreamfourhospital.com/"
                      >
                        {" "}
                        Click Here{" "}
                      </Link>
                    </span>
                  </li>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Technologies">
            <Card>
              <CardBody>
                <div className="px-5">
                  <p className="text-lg font-semibold border-b">As a full Stack developer i have technological knowledge in both field </p>
                  <li className="text-green-600 font-bold text-lg my-5">
                    <span className="text-foreground-700">Frontend</span>
                  </li>
                  <p className="capitalize">
                    HTML, CSS, Javascript, Typescript, React js, Next js, redux, Tailwind Css, bootstrap, material ui, next ui, ant design, shandcn ui, axios, react router dom, firebase , next auth, tanstack query.
                  </p>
                  <li className="text-red-600 font-bold text-lg my-5">
                    <span className="text-foreground-700">Backend</span>
                  </li>
                  <p className="capitalize">
                    Node js, express js, mongoDB, mongoose, jwt.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default DevInfo;
