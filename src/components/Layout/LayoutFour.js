'use client'

import withScrollFixed from "../../common/withScrollFixed";
import FooterOne from "../Footer/FooterOne";
import HeaderFour from "../Header/HeaderFour";

let ScrollFixedHeader = withScrollFixed(HeaderFour);

export default function LayoutFour(props) {
  return (
    <>
      <ScrollFixedHeader container={props.container} />
      {props.children}
      <FooterOne />
    </>
  );
}
