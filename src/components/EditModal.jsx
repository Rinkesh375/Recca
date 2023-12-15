import React, { useState } from 'react';
import { TiPlus } from "react-icons/ti";
import {useDispatch} from "react-redux";
import { updateProductStatus } from "../redux/action";
import { RiSubtractFill } from "react-icons/ri";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Grid,
    GridItem,
    Flex,
    Heading,
    Box,
    Input,
    Text,
    HStack,
    Divider,
    Stack,

    RadioGroup,
    Radio
} from '@chakra-ui/react'


const EditModal = ({ data: { id, name, brand, price, quantity, status, comment, image } }) => {
    const dispatch = useDispatch();
    const [modalData, setModalData] = useState({
        status,
        price,
        quantity,
        totalPrice: price * quantity,
        comment
    })
    
    const handleRadioComment = (value)=>{
        setModalData({ ...modalData, comment: value });
    }
   
    const handleEdit = ()=>{

        if(modalData.quantity !== quantity && modalData.price !== price) {
             dispatch(updateProductStatus({id,obj:{...modalData,status:"Quantity and Price Both Updated"}}))

        }
        else dispatch(updateProductStatus({id,obj:modalData}))
        onClose();
    }


    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Edit</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader mt="1rem" fontSize="1rem">{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Grid templateColumns="1fr">
                            <GridItem>
                                <Grid templateColumns='repeat(2, 1fr)' gap="1rem">
                                    <GridItem >
                                        <Image src={image} alt={name} />
                                    </GridItem>
                                    <GridItem >
                                        <Flex style={{ alignItems: "center", marginTop: "1rem" }}><Heading as='h6' size='xs' mr="1rem" >Price ₹</Heading>  <Input value={modalData?.price} onChange={(e) => setModalData({ ...modalData, price: e.target.value, totalPrice: modalData.quantity * e.target.value,status:"Price Updated" })} type='number' width="50%" /></Flex>
                                        <Flex style={{ alignItems: "center", marginTop: "1rem" }}><Heading as='h6' size='xs' mr="2rem">Quantity</Heading> <Flex style={{ alignItems: "center" }}>
                                            {modalData?.quantity > 0 ? <RiSubtractFill onClick={() => setModalData({ ...modalData, quantity: modalData.quantity - 1, totalPrice: (modalData.quantity - 1) * modalData.price,status:"Quantity Updated" })} style={{ cursor: "pointer", background: "green", color: "white", borderRadius: "1rem", marginRight: "0.5rem" }} /> :
                                                <RiSubtractFill style={{ cursor: "pointer", background: "green", color: "white", borderRadius: "1rem", marginRight: "0.5rem" }} />} <Text>{modalData?.quantity}</Text><TiPlus
                                                onClick={() => setModalData({ ...modalData, quantity: modalData.quantity + 1, totalPrice: (modalData.quantity + 1) * modalData.price ,status:"Quantity Updated"})} style={{ cursor: "pointer", background: "green", color: "white", borderRadius: "1rem", marginLeft: "0.5rem" }} />
                                        </Flex></Flex>
                                        <Flex style={{ alignItems: "center", marginTop: "1rem" }}>
                                            <Heading as='h6' size='xs' mr="1rem" >Total Price</Heading> <Text>{`₹   ${modalData?.totalPrice}`}</Text>
                                        </Flex>


                                    </GridItem>
                                </Grid>

                            </GridItem>
                            <Divider orientation='horizontal' height="2px" borderTop="1px solid gray" />
                            <GridItem>
                                <HStack><Heading as='h6' size='xs'>Choose Reason</Heading> <Box as="span"> (Optinal)</Box></HStack>

                                <RadioGroup  value={modalData?.comment}  onChange={handleRadioComment}>
                                    <Stack  >
                                        <Radio  value='Missing Product' style={{fontSize:"0.1rem"}}>Missing Product</Radio>
                                        <Radio value='Quantity is not the same' style={{fontSize:"0.1rem"}}>Quantity is not the same</Radio>
                                        <Radio value='Price is not the same' style={{fontSize:"0.1rem"}}>Price is not the same</Radio>
                                        <Radio value='other' style={{fontSize:"0.1rem"}}>Other</Radio>
                                    </Stack>
                                </RadioGroup>

                            </GridItem>



                        </Grid>




                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='green' onClick={handleEdit}>Send</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>

    );
}

export default EditModal;
