import React from 'react';
import {ButtonWrapper, CommonForm, CommonWrapper} from "../../../Main/ui/commonStyles/commonStyles";
import Input from "../../../Main/ui/common/input";
import Button from "../../../Main/ui/common/buttons";
import styled from "styled-components";

const RecoveryWrapper = styled(CommonWrapper)`
  background-color: #F4837D;
`;

const Recovery = () => {
    return (
        <RecoveryWrapper>
            <CommonForm>
                <Input placeholder={'your e-mail'}/>
                <ButtonWrapper>
                    <Button color={'#F4837D'} name={'reset password'}/>
                </ButtonWrapper>
            </CommonForm>
        </RecoveryWrapper>
    )
};

export default Recovery