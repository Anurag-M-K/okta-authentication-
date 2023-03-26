import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useOktaAuth } from "@okta/okta-react";

 const Navbar = () => {
        const { oktaAuth, authState } = useOktaAuth();
        const history = useHistory()
       

        const handleClick = () => {
            history.push("/profile");
        };
            const login = async () =>{
                try {
                await oktaAuth.signInWithRedirect({ originalUri: "/" })
                } catch (error) {
                    console.log( "error ",error)
                }
            }


            const logout =  () => {
                try {
                 
                //   await  oktaAuth.signOut()
                localStorage.clear()
                history.push('/')

                } catch (error) {
                    console.log("from logout btn ",error)
                }
                    }
        

        return (
            <Section>
                <Link to="/">
                    <h2>Regents Housing</h2>
                </Link>
                <ul>
                    <li>
                    <p onClick={handleClick}>Profile</p>

                    </li>
                    <li>
                        {
                          authState?.isAuthenticated ? (
                                <button onClick={logout}>Logout</button>
                            ) : (
                                <button onClick={login}>Login</button>
                            )
                        }
                    </li>
                </ul>
        </Section>
        )
    };
    const Section = styled.nav`
    width: 90%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
        font-style: oblique;
    }
    a {
        text-decoration: none;
    }


    & ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        & li {
            list-style-type: none;
            &:hover {
                text-decoration: underline;
            }
            &:nth-last-child(1) {
                margin-left: 1rem;
            }
            a {
                color: #333;
                font-weight: 500;
                font-size: 1rem;
                text-decoration: none;
            }
            & button {
                font-size: 1rem;
                color: #333;
                font-weight: 500;
                cursor: pointer;
                outline: none;
                border: none;
                background: transparent;
            }
        }
    }
`;
export default Navbar;