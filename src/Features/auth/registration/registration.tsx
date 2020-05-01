import React from 'react';
import styled from "styled-components/macro";
import {ButtonWrapper, CommonForm, CommonWrapper} from "../../../Main/ui/commonStyles/commonStyles";
import Input from "../../../Main/ui/common/input";
import Button from "../../../Main/ui/common/buttons";

const RegistrationWrapper = styled(CommonWrapper)`
  background-color: #29363B;
`;

const Registration = () => {
    return (
        <RegistrationWrapper>
            <CommonForm>
                <Input placeholder={'e-mail'}/>
                <Input placeholder={'login'}/>
                <Input placeholder={'password'}/>
                <ButtonWrapper>
                    <Button color={'#29363B'} name={'sign up'}/>
                </ButtonWrapper>
            </CommonForm>
        </RegistrationWrapper>
    )
};

export default Registration