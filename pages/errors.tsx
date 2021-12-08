import { H } from "highlight.run";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showBadComponent, setShowBadComponent] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Errors Demo Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Errors Demo Page</h1>

        <div className={styles.grid}>
          <div>
            <button
              onClick={() => {
                setShowBadComponent(true);
              }}
            >
              Show Error Boundary
            </button>
            {showBadComponent && <BadComponent />}
          </div>
          <button
            onClick={() => {
              DefaultError();
            }}
          >
            Throw an Error
          </button>
          <button
            onClick={() => {
              console.error("boba");
            }}
          >
            Console Error
          </button>
          <button
            onClick={() => {
              const a = undefined;
              //     @ts-expect-error
              a["0"] = "foo";
            }}
          >
            Read property of undefined;
          </button>
          <button
            onClick={() => {
              H.error("Highlight H.error");
            }}
          >
            H.error()
          </button>
          <button
            onClick={() => {
              CustomError();
            }}
          >
            Throw a custom Error
          </button>{" "}
          <button>Throw an Error</button>
        </div>
      </main>
    </div>
  );
}

const BadComponent = () => (
  <div>
    {/* @ts-expect-error */}
    {badVariableAccess}
  </div>
);

const CustomError = () => {
  CustomErrorDeeper();
};

const CustomErrorDeeper = () => {
  H.error("error is being thrown yo!");
};

const DefaultError = () => {
  DefaultErrorDeeper();
};

const DefaultErrorDeeper = () => {
  throw new Error("errors page");
};
