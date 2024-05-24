import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const DevInfo = () => {
  return (
    <div className="w-full max-w-7xl px-5 mx-auto mt-16">
      <h1 className="text-foreground text-[28px] font-bold text-center py-5">
        Dev Info
      </h1>

 
        <div className="flex w-full flex-col ">
          <Tabs aria-label="Options" color="primary" variant="bordered">
            <Tab key="photos" title="Education"  >
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Experience">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Technologies">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      
    </div>
  );
};

export default DevInfo;
