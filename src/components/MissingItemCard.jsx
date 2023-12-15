import {useDispatch} from "react-redux";
import { updateProductStatus } from "../redux/action";
import React from 'react';import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
  

const MissingItemCard = ({id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch()
  return (
    <>
    
    <Button onClick={onOpen}>X</Button>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Missing Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           is 'Chicken Breast Fillets, Boneless' ...urgent?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>{
                dispatch(updateProductStatus({id,obj:{status:"Missing"}}));
                onClose();

                
            }} >
               No
            </Button>
            <Button variant='ghost' onClick={()=>{
                dispatch(updateProductStatus({id,obj:{status:"Missing Urgent"}}));
                onClose();
            }}>Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
 
  );
}

export default MissingItemCard;
