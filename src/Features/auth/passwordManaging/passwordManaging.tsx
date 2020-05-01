import React from 'react';
import {ButtonWrapper, CommonForm, CommonWrapper} from "../../../Main/ui/commonStyles/commonStyles";
import Input from "../../../Main/ui/common/input";
import Button from "../../../Main/ui/common/buttons";
import styled from "styled-components";

const PasswordWrapper = styled(CommonWrapper)`
  background-color: #FDCEA9;
`;

const PasswordManaging = () => {
    return (
        <PasswordWrapper>
            <CommonForm>
                <Input placeholder={'new password'}/>
                <ButtonWrapper>
                    <Button color={'#FDCEA9'} name={'submit password'}/>
                </ButtonWrapper>
            </CommonForm>
        </PasswordWrapper>
    )
};

export default PasswordManaging