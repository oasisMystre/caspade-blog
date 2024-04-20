import type Firebase from ".";

export abstract class FirebaseImpl {
  constructor(readonly firebase: Firebase) {}
}
