export type Product={name:string;category:string;detail:string;image:string};
const imgs={shirt:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",hoodie:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85",sport:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85",cricket:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",boxing:"https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=85",basket:"https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85"};
export const garments=["T-shirts","Polos","Hoodies","Sweatshirts","Tracksuits","Jackets","Streetwear","Gymwear","Compression wear","Team uniforms","Sportswear","Workwear","Custom garments"];
export const equipment=["Football / soccer","Cricket","Hockey","Basketball","Boxing / combat","Volleyball","Rugby","Baseball","Fitness / training accessories","Custom-requested products"];
export const products:Product[]=[
 {name:"Private-label tees",category:"Custom Garments",detail:"Fabric, fit, color, print, embroidery and labels made to specification.",image:imgs.shirt},
 {name:"Premium hoodies",category:"Custom Garments",detail:"Custom GSM, trims, wash, branding and retail-ready packaging.",image:imgs.hoodie},
 {name:"Team football systems",category:"Football / Soccer",detail:"Custom balls, match kits and coordinated training equipment.",image:imgs.sport},
 {name:"Cricket kit",category:"Cricket",detail:"Bats, balls, batting gloves, pads and uniforms built to brief.",image:imgs.cricket},
 {name:"Basketball program",category:"Basketball",detail:"Custom balls, jerseys, shorts and training essentials.",image:imgs.basket},
 {name:"Boxing & fitness",category:"Combat & Training",detail:"Gloves, protective and training equipment with matching apparel.",image:imgs.boxing}
];
export const faqs=[
 ["What are your minimum order quantities?","We offer flexible quantities. Minimums depend on the product, materials, customization method and packaging; share your brief for a product-specific quotation."],
 ["Can you make a sample first?","Yes. Typical sample time is 5–7 days after specifications and artwork are confirmed. This is an estimate and may vary by product."],
 ["How long does production take?","Typical production time is 10–12 days after sample and order approval. Complex orders, quantity, sourcing and shipping requirements may affect timing."],
 ["Can you apply my private label?","Yes. Options can include woven labels, printed labels, hangtags, packaging, embroidery, screen printing, sublimation and other product-appropriate branding."],
 ["Do you ship worldwide?","We prepare export orders for destinations worldwide and quote shipping based on destination, volume, urgency and preferred delivery terms."],
 ["Can I verify manufacturing?","Qualified buyers can discuss appropriate private verification options. We do not publish factory photographs or make unsupported certification claims."],
 ["How do I send artwork?","Start your quote here, then send reference files directly through WhatsApp so the team can confirm receipt and suitability."]
];
export const process=["Share your brief","Specification review","Quotation & terms","Sample development","Production & quality checks","Packing & dispatch"];
