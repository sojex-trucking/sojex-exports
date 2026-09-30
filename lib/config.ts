export const company = {
  name: "SOJEX EXPORTS", location: "Sialkot, Pakistan", whatsapp: "+923246288973", whatsappDigits: "923246288973",
  email: "", socials: {} as Record<string,string>, tagline: "YOUR DESIGN. YOUR QUANTITY. YOUR PRICE."
};
export const waLink=(message:string)=>`https://wa.me/${company.whatsappDigits}?text=${encodeURIComponent(message)}`;
export const nav=[
  ["Home","/"],["Garments","/custom-garments"],["Sports Equipment","/sports-equipment"],["Private Label","/private-label"],["Process","/how-it-works"],["About","/about"],["Reviews","/reviews"],["FAQ","/faq"],["Contact","/contact"]
] as const;
