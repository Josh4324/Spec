import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
        <p className="text-muted text-center text-md-left">
          Copyright © 2021{" "}
          <Link to="/" target="_blank">
            Trendupp
          </Link>
          . All rights reserved
        </p>
      </footer>
    </>
  );
}
