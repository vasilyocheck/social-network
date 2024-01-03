import React from "react";
import s from "./ContactDetails.module.css";

type ContactType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};

type ContactDetailsType = {
  contacts: ContactType;
};
export const ContactDetails = ({ contacts }: ContactDetailsType) => {
  console.log(Object.entries(contacts));
  console.log(contacts["vk"]);
  const contactsList = Object.entries(contacts).map((c) => {
    return (
      <div className={s.contact} key={c[0]}>
        <b>{c[0]}:</b>
        {c[1]}
      </div>
    );
  });
  return <div>{contactsList}</div>;
};
