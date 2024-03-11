import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import myphoto from "../images/myphoto.jpg";
import { FaBeer } from "react-icons/fa";
export default function Logo() {
  return (
    <div>
       <FaBeer size={28} color={["white", "white", "white", "green"]}/>
    </div>
  );
}