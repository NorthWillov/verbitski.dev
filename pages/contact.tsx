import React from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import Head from "next/head";
import ContactForm from "../components/contact-form";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <div className="paper-bg mt-16">
        <Container>
          <h1 className="text-8xl pt-20">Contact</h1>
          <hr className="border-accent-1 border-2" />
          <ContactForm />
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;
