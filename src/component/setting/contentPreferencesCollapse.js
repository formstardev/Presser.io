import React from "react";
import { useState } from "react";
import {
  Collapse,
  Card,
  CardBody
} from "@material-tailwind/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
 
export default function ContentPreferences() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(cur => !cur);
 
return (
 
        <>
            <div className="md:w-[517px] justify-between">
                <div className="flex justify-between mx-3 py-4">
                    <p className="text-white font-bold">Content Preferences</p>
                    <div className="flex justify-center items-center text-[20px] hover:cursor-pointer">
                        {!open ?
                        <FiChevronDown className="text-white" onClick={toggleOpen}/>
                        :
                        <FiChevronUp className="text-white" onClick={toggleOpen}/>
                        }
                    </div>
                </div>
                <Collapse open={open}>
                    <Card className="my-4 w-full bg-[#373c40] mx-auto">
                        <CardBody>
                            <div className="mx-3 mt-2">
                                <div className="font-light">
                                    <p className="md:text-[12px] text-white">
                                        commodo id mollit deserunt elit. Minim mollit ipsum quis ad non voluptate eiusmod. Duis fugiat deserunt consectetur Lorem ex et dolore proident. Lorem sit nostrud deserunt exercitation. Elit eu nisi veniam aute laboris laboris cupidatat est ea officia. Labore consectetur do enim est fugiat non nulla reprehenderit consectetur. Elit elit Lorem ex cillum pariatur adipisicing qui enim elit excepteur laboris cillum dolore. Proident reprehenderit dolor in consequat magna.
                                    </p>                                
                                </div>                            
                            </div>                        
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </>
) }
 