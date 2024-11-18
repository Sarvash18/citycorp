import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-gradient" id="contact">
      <div class="container ">
        <footer class="d-flex flex-wrap justify-content-center gap-2 align-items-center py-1 mt-4  border-top">
          <div
            className="beautiful-button mt-3"
            onClick={() =>
              (window.location.href = "https://wa.me/+919443460300")
            }
          >
            Contact us
          </div>
          <div className="googleBtn mt-3">
            <button
              class="buttons"
              onClick={() =>
                (window.location.href =
                  "https://www.google.com/localservices/prolist?g2lbs=ADZRdkvWwhC3VKtZbU3QXr5VZe212M1r0ntYWifFzmm3_Rgnv9FhlkWD1w_dWFjDl0PfSqMC7P46s1UPWCnQfItgfSYkyyp-1y_k-2SGQVb4WorPkKg46UCaKNbJTOym9kAuzZq2vnWN&hl=en-IN&gl=in&ssta=1&oq=go%20abroad%20education%20vizag&src=2&lrlstt=1682147711058&q=CITY%20CORPORATION%20No.%2053%2C%20Old%20No.%2011%2C%2012%2C%20Madurai%20Rd%2C%20near%20Ramakrishna%20Theatre%2C%20Palakarai%2C%20Tharanallur%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620008&ved=2ahUKEwjSyNeRm_SIAxUr7YQAHU_THIcQjdcJegQIABAF&spp=Cg0vZy8xMWJ3MXptXzVyOqQEV3AwQkVBQVFBUkFDRUFNUUJCQUtFQXNRREJBTkVBNFFEeEFRRUJFUUVpSl9ZMmwwZVNCamIzSndiM0poZEdsdmJpQnVieUExTXlCdmJHUWdibThnTVRFZ01USWdiV0ZrZFhKaGFTQnlaQ0J1WldGeUlISmhiV0ZyY21semFHNWhJSFJvWldGMGNtVWdjR0ZzWVd0aGNtRnBJSFJvWVhKaGJtRnNiSFZ5SUhScGNuVmphR2x5WVhCd1lXeHNhU0IwWVcxcGJDQnVZV1IxSURZeU1EQXdPS29COWdFUUFTcExJa2RqYVhSNUlHTnZjbkJ2Y21GMGFXOXVJRzV2SURVeklHOXNaQ0J1YnlBeE1TQXhNaUJ0WVdSMWNtRnBJSEprSUc1bFlYSWdjbUZ0WVd0eWFYTm9ibUVnZEdobFlYUnlaU2dBTWg4UUFTSWJrcldDTUlsOTBEUXJMRk9MY01scXNCTHlxZHc3bjVzUGgwb0NNb01CRUFJaWYyTnBkSGtnWTI5eWNHOXlZWFJwYjI0Z2JtOGdOVE1nYjJ4a0lHNXZJREV4SURFeUlHMWhaSFZ5WVdrZ2NtUWdibVZoY2lCeVlXMWhhM0pwYzJodVlTQjBhR1ZoZEhKbElIQmhiR0ZyWVhKaGFTQjBhR0Z5WVc1aGJHeDFjaUIwYVhKMVkyaHBjbUZ3Y0dGc2JHa2dkR0Z0YVd3Z2JtRmtkU0EyTWpBd01EZz0%3D&slp=MgBAAVIECAIgAIgBAA%3D%3D&scp=CgpnY2lkOnN0b3JlEgAaACoEU2hvcA%3D%3D#ts=3")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Review us on Google
            </button>
          </div>
        </footer>

        <div className="d-flex flex-wrap justify-content-center social-icons my-1 ">
          <ul class="nav col-md-4  list-unstyled d-flex wrapper">
            <li class=" icon facebook">
              <span className="tooltip">Facebook</span>
              <a href="#">
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </li>
            <li class="icon twitter">
              <span className="tooltip">Twitter</span>
              <a href="#">
                <svg
                  height="1.4em"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="twitter"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
            </li>
            <li class="icon instagram">
              <span className="tooltip">Instagram</span>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.4em"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </a>
            </li>
            <li class=" icon whatsapp">
              <span className="tooltip">Whatsapp</span>
              <a href="https://api.whatsapp.com/send?text=City%20Corporation%20%28Hardwares%29%20https%3A%2F%2Fnfc.dgtechsoln.com%2Fcity-corporation-hardwares%2F">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.6em"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-2 justify-content-center d-flex align-items-center">
          <span class="mb-3 mb-md-0 text-black">
            Copyright © 2024 City Corporation
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
