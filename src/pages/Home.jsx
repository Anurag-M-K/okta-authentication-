import { useOktaAuth } from "@okta/okta-react";
import useAuthUser from "../hooks/getUser";
import styled from "styled-components";
import { Data } from "../components/data";
import Card from "../components/Roomcard";

const Home = () => {
    const { authState } = useOktaAuth();
    const userInfo = useAuthUser(); //useAuthUser configured in hook/getUser file , userInfo contain login user details 

    console.log("firs t ",authState)
return (
        <Container>
            {authState?.isAuthenticated ? (
                <>
                    <h2>Welcome back, {userInfo?.name}</h2>
                    <article>
                        {Data.map(
                            ({ id, coverImg, roomNo, occupantName, rentDueDate }) => (
                                <div key={id} className="card">
                                    <Card //sending card details through props to RoomCard component
                                        coverImg={coverImg}
                                        roomNo={roomNo}
                                        occupantName={occupantName}
                                        rentDueDate={rentDueDate}
                                    />
                                </div>
                            )
                        )}
                    </article>
                </>
            ) : (
                <p style={{ textAlign: "center", marginTop: "6rem", fontSize: '2rem' }}>
                    Please login to see data
                </p>
            )}
        </Container>
    );
};
const Container = styled.section`
       max-width: 90%;
        margin: 2rem auto;
        & h2 {
            font-weight: 500;
            margin-bottom: 2rem;
            font-size: 1.3rem;
        }
        & > article {
            width: 90%;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            .card {
                margin: 1rem;
            }
        }
    `;
export default Home;