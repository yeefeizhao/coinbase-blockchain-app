import React from 'react';
import styled from 'styled-components';

function Promos() {
    return (
        <Wrapper>
            <OfferCard>
                <Title>Yield Earned</Title>
                <Description>Earn up to 2.84% APY on your crypto</Description>
                <Placeholder />
                <Additional>
                    $0.000066 <span>2.84% APY</span>
                </Additional>
            </OfferCard>

            <OfferCard>
                <Title>Learn and Earn</Title>
                <Description>Earn up to 2.84% APY on your crypto</Description>
                <Placeholder />
                <Additional style={{ color: '#3773f5' }}>
                    Verify Identity
                </Additional>
            </OfferCard>
        </Wrapper>
    )
}

export default Promos;

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-right: 1rem;
`

const OfferCard = styled.div`
    width: 21rem;
    height: 11rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border: 1px solid #282b2f;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.1rem;
`

const Description = styled.div`
    font-size: 1.1rem;
`

const Placeholder = styled.div`
    flex: 1;
`

const Additional = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
        font-size: 1rem;
        color: #8a919e !important;
    }
`