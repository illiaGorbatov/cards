import React from 'react';
import Input from "../../../Main/ui/common/input";
import Button from "../../../Main/ui/common/buttons";
import {ButtonWrapper, CommonForm, CommonWrapper} from "../../../Main/ui/commonStyles/commonStyles";
import styled from "styled-components";

const LoginWrapper = styled(CommonWrapper)`
  background-color: #EA495F;
`;

const Login = () => {
    return (
        <LoginWrapper>
            <CommonForm>
                <Input placeholder={'Login'}/>
                <Input placeholder={'password'}/>
                <ButtonWrapper>
                    <Button color={'#EA495F'} name={'log in'}/>
                </ButtonWrapper>
            </CommonForm>
        </LoginWrapper>
    )
};

export default Login