import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

export const MovieStore = writable([
  {
    id: uuid(),
    title: "What did you do in the war Thanassi?",
    description:
      "During the dark and turbulent years of the German occupation in Greece, factory worker Thanasis ends up imprisoned with resistance fighters. He finds himself joining the resistance unwillingly after the Germans mistake him for one of their leaders.",
    rating: 7.6,
  },
  {
    id: uuid(),
    title: "City of God",
    description:
      "Two boys are brought up in a sadistic neighbourhood of Rio de Janeiro. They adopt diverse professional paths, with one of them becoming a photographer and the other boy becoming a drug dealer.",
    rating: 8.6,
  },
  {
    id: uuid(),
    title: "Perfect Blue",
    description:
      'A singer quits her band to become an actress and sheds her "good girl" image to further her career.',
    rating: 8,
  },
]);
