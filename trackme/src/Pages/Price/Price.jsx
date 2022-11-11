import {
    Box,
    Heading,
    Text,
    Button,
    Link,
    Switch,
    HStack,
    Input,
    List,
    ListItem,
    ListIcon,
    FormLabel,
    FormControl,
  } from "@chakra-ui/react";
  import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from "@chakra-ui/react";
  import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
  import React, { useState } from "react";
//   import "../../App.css";
  import { useEffect } from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
  
  const Price = () => {
    const [teamSize, setTeamSize] = useState(1);
    const [subscriptionType, setSubscriptionType] = useState("Annually");
    const [displayType, setdisplayType] = useState(false);
  
    const options = [
      {
        id: 1,
        title: "Time tracking",
      },
      {
        id: 2,
        title: "Unlimited projects and clients",
      },
      {
        id: 3,
        title: "Reporting",
      },
      {
        id: 4,
        title: "Timer button in 50+ web apps",
      },
      {
        id: 5,
        title: "Calendar integrations: Google, Outlook",
      },
      {
        id: 6,
        title: "Billable rates and money tracking",
      },
      {
        id: 7,
        title: "Budgeting for projects",
      },
      {
        id: 8,
        title: "Invoicing",
      },
      {
        id: 9,
        title: "Task management",
      },
      {
        id: 10,
        title: "Activity levels for employees",
      },
      {
        id: 11,
        title: "Apps and sites usage reports",
      },
      {
        id: 12,
        title: "Screenshots capturing",
      },
      {
        id: 13,
        title: "Paid time off tracking",
      },
      {
        id: 14,
        title: "Payroll for employees",
      },
      {
        id: 15,
        title: "Time tracking permissions",
      },
      {
        id: 16,
        title: "Time-sync with Jira and QuickBooks",
      },
      {
        id: 17,
        title: "Time Off Calendar",
      },
      {
        id: 18,
        title: "Work Schedule",
      },
      {
        id: 19,
        title: "Team Dashboard",
      },
    ];
  
    const onSwitchToggle = (e) => {
      // console.log(e.target.checked);
      // console.log("displayType", displayType);
      // console.log("subscriptionType", subscriptionType);
      e.target.checked
        ? setSubscriptionType("Monthly")
        : setSubscriptionType("Annually");
    };
  
    useEffect(() => {
      if (subscriptionType === "Monthly") {
        setdisplayType(true);
        console.log("year");
      } else {
        setdisplayType(false);
        console.log("month");
      }
    }, [subscriptionType, displayType]);
  
    return (
        
      <Box>
        <Navbar />
        <Box bg="#e8edff" textAlign="center" mt="" minH="356px">
          <Heading
            fontSize="3.75rem"
            fontWeight="bold"
            pt="94px"
            m="0 auto 2.1rem"
          >
            Pricing
          </Heading>
          <Text m="0 auto" fontSize="1.25rem" fontWeight="bold">
            All plans include free 30-day trial. No credit card required!
          </Text>
        </Box>
  
        {/* Select Plan Section */}
        <Box mb="2rem">
          <Box
            m="30px 60px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #e2e6eb"
            borderRadius="12px"
            p="1.1rem 2rem"
          >
            <FormControl display="flex" alignItems="center" w="fit-content">
              <FormLabel
                fontSize="1.25rem"
                fontWeight="500"
                htmlFor="subscription-type"
                mb="0"
              >
                Monthly
              </FormLabel>
              <Switch
                id="subscription-type"
                // isChecked={false}
                value={subscriptionType}
                onChange={onSwitchToggle}
              />
              <FormLabel
                fontSize="1.25rem"
                fontWeight="500"
                htmlFor="subscription-type"
                mb="0"
                ml="15px"
              >
                Annually
              </FormLabel>
            </FormControl>
            <Text
              fontSize="1.25rem"
              fontWeight="500"
              pl="15px"
              mr="10px"
              borderLeft="1px solid #e2e6eb"
            >
              Team Size
            </Text>
            <Input
              type="number"
              w="90px"
              mr="2rem"
              value={teamSize}
              min="1"
              max="200"
              onChange={(e) =>
                setTeamSize(
                  e.target.value > 200
                    ? 200
                    : e.target.value < 1
                    ? 1
                    : e.target.value
                )
              }
            />
            <Slider
              aria-label="slider-ex-2"
              colorScheme="blue"
              min={1}
              max={200}
              defaultValue={teamSize}
              onChangeEnd={(val) => setTeamSize(val)}
              w="55%"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <HStack
            m="0px 40px 30px"
            display="flex"
            textAlign="center"
            justifyContent="center"
          >
            <Box border="1px solid #e2e6eb" borderRadius="12px" p="1.1rem 2rem">
              <Heading>Business</Heading>
              <Box
                bg="#f6f7f8"
                borderRadius="12px"
                textAlign="center"
                p="0.4rem 1rem .8rem"
                m="1.5rem 0"
              >
                {displayType && (
                  <Text color="#4c5157" fontSize="1.25rem" fontWeight="500">
                    ${" "}
                    <span style={{ fontSize: "3rem", color: "#212529" }}>
                      {70 * Number(teamSize)}
                    </span>
                    /year
                  </Text>
                )}
                {!displayType && (
                  <Text color="#4c5157" fontSize="1.25rem" fontWeight="500">
                    ${" "}
                    <span style={{ fontSize: "3rem", color: "#212529" }}>
                      {7 * Number(teamSize)}
                    </span>
                    /month
                  </Text>
                )}
              </Box>{" "}
              <List spacing={3} textAlign="left">
                {options.map((elem) => (
                  <ListItem key={elem.id}>
                    <HStack>
                      <ListIcon as={CheckIcon} color="green.500" />
                      <Text
                        borderBottom="1px solid #ebedf0"
                        w="100%"
                        p=".8125rem 0 .375rem 0"
                      >
                        {elem.title}
                      </Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </Box>
  
            <Box border="1px solid #e2e6eb" borderRadius="12px" p="1.1rem 2rem">
              <Heading>Professional</Heading>
              <Box
                bg="#f6f7f8"
                borderRadius="12px"
                textAlign="center"
                p="0.4rem 1rem .8rem"
                m="1.5rem 0"
              >
                {displayType && (
                  <Text color="#4c5157" fontSize="1.25rem" fontWeight="500">
                    ${" "}
                    <span style={{ fontSize: "3rem", color: "#212529" }}>
                      {50 * Number(teamSize)}
                    </span>
                    /year
                  </Text>
                )}
                {!displayType && (
                  <Text color="#4c5157" fontSize="1.25rem" fontWeight="500">
                    ${" "}
                    <span style={{ fontSize: "3rem", color: "#212529" }}>
                      {5 * Number(teamSize)}
                    </span>
                    /month
                  </Text>
                )}
              </Box>
              <List spacing={3} textAlign="left">
                {options.map((elem) => (
                  <ListItem key={elem.id}>
                    {elem.id <= "10" ? (
                      <HStack>
                        <ListIcon as={CheckIcon} color="green.500" />
  
                        <Text
                          borderBottom="1px solid #ebedf0"
                          w="100%"
                          p=".8125rem 0 .375rem 0"
                        >
                          {elem.title}
                        </Text>
                      </HStack>
                    ) : (
                      <HStack>
                        <ListIcon as={CloseIcon} color="#a1a7b2" />
                        <Text
                          borderBottom="1px solid #ebedf0"
                          color="#a1a7b2"
                          w="100%"
                          p=".8125rem 0 .375rem 0"
                        >
                          {elem.title}
                        </Text>
                      </HStack>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
  
            <Box border="1px solid #e2e6eb" borderRadius="12px" p="1.1rem 2rem">
              <Heading>Free</Heading>
              <Box
                bg="#f6f7f8"
                borderRadius="12px"
                textAlign="center"
                p="0.4rem 1rem .8rem"
                m="1.5rem 0"
              >
                <Text color="#4c5157" fontSize="1.25rem" fontWeight="500">
                  $ <span style={{ fontSize: "3rem", color: "#212529" }}>0</span>
                  /month
                </Text>
              </Box>{" "}
              <List spacing={3} textAlign="left">
                {options.map((elem) => (
                  <ListItem key={elem.id}>
                    {elem.id <= "4" ? (
                      <HStack>
                        <ListIcon as={CheckIcon} color="green.500" />
                        <Text
                          borderBottom="1px solid #ebedf0"
                          w="100%"
                          p=".8125rem 0 .375rem 0"
                        >
                          {elem.title}
                        </Text>
                      </HStack>
                    ) : (
                      <HStack>
                        <ListIcon as={CloseIcon} color="#a1a7b2" />
                        <Text
                          borderBottom="1px solid #ebedf0"
                          color="#a1a7b2"
                          w="100%"
                          p=".8125rem 0 .375rem 0"
                        >
                          {elem.title}
                        </Text>
                      </HStack>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          </HStack>
  
          <HStack className="btn2" justifyContent="center" mb="1rem">
            <Button
              size="md"
              bg="#3070f0"
              color="white"
              minW="200px"
              _hover={{ bg: "#0053a6" }}
            >
              Get Started
            </Button>
            <Text>Fully Functional 30-Day Trial</Text>
          </HStack>
  
          <Text textAlign="center">
            Checkout out{" "}
            <Link style={{ color: "#3070f0" }} href="#">
              detailed plan comparison
            </Link>{" "}
          </Text>
        </Box>
  
        {/* How To Buy Section  */}
        <Box borderTop="1px solid #e2e6eb" p="3.1875rem 0 2.5rem">
          <Heading
            textAlign="center"
            fontSize="2.25rem"
            fontWeight="bold"
            m="0 0 2.65rem"
          >
            How to Buy ?
          </Heading>
  
          <Box style={{ width: "50%", margin: "auto" }}>
            <HStack mt="30px">
              <Button
                background="#e7edfc"
                color="#2e4497"
                fontSize="25px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                1
              </Button>
              <Text>
                <Link href="/signin" style={{ color: "#3070f0" }}>
                  Log in
                </Link>
                <span> </span>
                to your TMetric account. If you don't have one,
                <span> </span>
                <Link href="/signup" style={{ color: "#3070f0" }}>
                  sign up
                </Link>
                <span> </span>
                now.
              </Text>
            </HStack>
  
            <HStack mt="30px">
              <Button
                background="#e7edfc"
                color="#2e4497"
                fontSize="25px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                2
              </Button>
              <Text to="#">
                On the main menu, click
                <span style={{ fontWeight: "700" }}> Workspace</span> and select{" "}
                <span style={{ fontWeight: "750" }}>Subscription. </span>
              </Text>
            </HStack>
  
            <HStack mt="30px">
              <Button
                background="#e7edfc"
                color="#2e4497"
                fontSize="25px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                3
              </Button>
              <Text to="#">
                On the subscription page click
                <span style={{ fontWeight: "700" }}> Upgrade Now.</span>
              </Text>
            </HStack>
  
            <HStack mt="30px">
              <Button
                background="#e7edfc"
                color="#2e4497"
                fontSize="25px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                4
              </Button>
              <Text to="#">
                Enter your team size, select subscription plan, and click{" "}
                <span style={{ fontWeight: "700" }}> Proceed To Checkout.</span>
              </Text>
            </HStack>
  
            <HStack mt="30px">
              <Button
                background="#e7edfc"
                color="#2e4497"
                fontSize="25px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                5
              </Button>
              <Text to="#">
                On the shopping cart page enter your Billing Information and
                select Payment Options.
              </Text>
            </HStack>
  
            <HStack mt="30px">
              <Button
                background="#e7edfc"
                color="#2e4497"
                fontSize="25px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                6
              </Button>
              <Text to="#">
                {" "}
                Click
                <span style={{ fontWeight: "700" }}> Continue </span>to place an
                order.
              </Text>
            </HStack>
          </Box>
        </Box>
  
        {/* Other Questions Section */}
        <Box borderTop="1px solid #e2e6eb" p="3.1875rem 0 2.5rem">
          <Heading
            textAlign="center"
            fontSize="2.25rem"
            fontWeight="bold"
            m="0 0 2.65rem"
          >
            Other Questions
          </Heading>
  
          <Box maxW="728px" m="0 auto">
            <Box fontWeight="600" mt="30px" display="flex">
              <Button
                bg="#fef6e2"
                color="#9b6919"
                fontSize="20px"
                width="50px"
                height="50px"
                marginRight="40px"
                borderRadius="12px"
                border="none"
              >
                Q
              </Button>
              <Text
                border="1px solid #e2e6eb"
                borderRadius="0 12px 12px 12px"
                p=".92rem 1.25rem"
                position="relative"
              >
                Have a large team?
              </Text>
            </Box>
  
            <HStack mt="30px">
              <Button
                background="#e3f8e7"
                color="#127924"
                fontSize="20px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                A
              </Button>
              <Text
                border="1px solid #f8f9fa"
                borderRadius="0 12px 12px 12px"
                p=".92rem 1.25rem"
                position="relative"
                backgroundColor="#f8f9fa"
              >
                You can save money with our volume discount for teams of 40+
                users. Learn more on{" "}
                <span style={{ color: "#5ea0f5" }}> FAQ.</span>
              </Text>
            </HStack>
  
            <Box mt="30px" fontWeight="600" display="flex">
              <Button
                bg="#fef6e2"
                color="#9b6919"
                fontSize="20px"
                width="50px"
                height="50px"
                marginRight="40px"
                borderRadius="12px"
                border="none"
              >
                Q
              </Button>
              <Text
                border="1px solid #e2e6eb"
                borderRadius="0 12px 12px 12px"
                p=".92rem 1.25rem"
                position="relative"
              >
                Running a non-profit organization?
              </Text>
            </Box>
  
            <HStack mt="30px">
              <Button
                background="#e3f8e7"
                color="#127924"
                fontSize="20px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                A
              </Button>
              <Text
                border="1px solid #f8f9fa"
                borderRadius="0 12px 12px 12px"
                p=".92rem 1.25rem"
                position="relative"
                backgroundColor="#f8f9fa"
              >
                We offer special{" "}
                <span style={{ color: "#5ea0f5" }}>
                  pricing options for non-profit
                </span>{" "}
                and education organizations. To apply, please{" "}
                <span style={{ color: "#5ea0f5" }}> contact</span> team
              </Text>
              .
            </HStack>
  
            <Box mt="30px" fontWeight="600" display="flex">
              <Button
                bg="#fef6e2"
                color="#9b6919"
                fontSize="20px"
                width="50px"
                height="50px"
                marginRight="40px"
                borderRadius="12px"
                border="none"
              >
                Q
              </Button>
  
              <Text
                border="1px solid #e2e6eb"
                borderRadius="0 12px 12px 12px"
                p=".92rem 1.25rem"
                position="relative"
              >
                Have other sales questions?
              </Text>
            </Box>
  
            <HStack mt="30px">
              <Button
                background="#e3f8e7"
                color="#127924"
                fontSize="20px"
                width="50px"
                height="50px"
                marginRight="40px"
                fontWeight="600"
                borderRadius="12px"
                border="none"
              >
                A
              </Button>
              <Text
                border="1px solid #f8f9fa"
                borderRadius="0 12px 12px 12px"
                p=".92rem 1.25rem"
                position="relative"
                backgroundColor="#f8f9fa"
              >
                Please contact our sales department at
                <span style={{ color: "#5ea0f5" }}> sales@tmetric.com</span>
              </Text>
            </HStack>
          </Box>
        </Box>
  
        {/* Last Section */}
        <Box
          bgImage="url(https://tmetric.com/media/shvmqkff/colored-banner-image.png)"
          bgSize="cover"
          textAlign="center"
          p="4rem 0 2rem"
        >
          <Heading fontSize="2.25rem" fontWeight="bold" mb="2rem">
            Make time work for you!
          </Heading>
          <Box className="btn2">
            <Button
              size="lg"
              bg="#3070f0"
              color="white"
              mb="2rem"
              minW="200px"
              _hover={{ bg: "#0053a6" }}
            >
              Start Free Trial
            </Button>
          </Box>
        </Box>
        
        <Footer/>
      </Box>
    );
  };
  
  export default Price;