import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import Reaction from "./reaction";
import EmailListing from "./emailListing";

export default class Firebase {
  reaction: Reaction;
  emailListing: EmailListing;

  constructor() {
    this.reaction = new Reaction(this);
    this.emailListing = new EmailListing(this);
  }

  get auth() {
    return getAuth();
  }

  get firestore() {
    return getFirestore();
  }

  ///@ts-ignore
  static #instance: Firebase;

  static get instance() {
    if (!Firebase.#instance) this.#instance = new Firebase();

    return this.#instance;
  }
}
