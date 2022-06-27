
# CMDA-midterm
<img src="https://github.com/KaivWezel/cmda-mid-term/blob/main/Assets%20rm/Header-readme.jpg" width=500>

# Introduction
Dit is een website gerealiseerd voor CMD mid-terms. De website is duurzaam en maakt gebruikt van een headless CMS om de content aanpasbaar te maken. De website is een downloadbare PWA + Cache voor offline gebruik. 

## Table of contents
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [About](#about)
  - [Gecodeerd met](#gecodeerd-met)
  - [Features](#features)
  - [Wishlist](#wishlist)
  - [Installing](#installing)
  - [Presentation](#presentation)
  - [Sources](#sources)
  - [Author](#author)
  - [License](#license)

# About
De opdracht CMDA Mid Term Website was eerst beschreven als een opdracht dat ontworpen en ontwikkeld moet worden in de huisstijl van de opleiding Communicatie en Multimedia Design (hierna CMD), dusdanig de sfeer van CMD reflecteren, toegankelijk, responsive en duurzaam zijn. Daarbij werden de volgende user stories benoemd;

- De midterm accreditatie lezen, beoordelen en beleven in CMD huisstijl
- De sfeer an de CMD Medialounge en labs beleven, een virtuele tour door de ruimtes van CMD heen.
- Content van de accreditatie kunnen aanpassen, aan de hand van een Content Management Systeem (hierna CMS)

# Gecodeerd met
De codebase bestaat uit verschillende componenten, de frontend is een JAMstack applicatie gebaseerd op Nuxtjs, een framework voor Vuejs. Hiermee genereren wij statische HTML,CSS en JS.

Vervolgens is er gebruik gemaakt van Prismic en slicemachine, een headless CMS dat gehost wordt in de cloud en een tool van prismic dat componenten transformeert naar een sectie dat gebruikt kan worden om een website te bouwen.

De keuze van Nuxt is ook gefaciliteerd door prismic omdat zijn ondersteuning hebben gebouwd voor next, nuxt, gatsby, vue, react, svelte, express en vanilla JavaScript

# Features 
- Aanpasbare content door middel van headless CMS (Prismic)
- Downloadbare PWA
- Statische cache voor offline gebruik

# Wishlist
- Lottie annimaties
- 3D CMD blokken
- Up to date component designs
- Interactieve content
- Documentatie voor doorontwikkeling

# Installing
1. Clone deze repository naar jouw lokale folder
```BASH
git clone https://github.com/KaivWezel/cmda-mid-term.git
```
2. Open de folder in jouw code applicatie [zoals VSCODE](https://code.visualstudio.com/Download)
4. Install all packages
```BASH
npm install || npm i
```
5. Start de applicatie met de volgende command
```BASH
npm install || npm run dev
```
6. Open de de localhost:3000 in je browser

*extra*. Statisch genereren van de website
```BASH
npm run generate && npm run build && npm run start
```
# Presentation
Lees meer over de presentatie van deze website in de [wiki](https://github.com/KaivWezel/cmda-mid-term/wiki)

# Sources
- [Code hulp bron](https://developer.mozilla.org/en-US/)
- [Serversworker](https://github.com/NekR/self-destroying-sw)
- [Prismic](https://prismic.io/docs?account_id=4897815674&campaign_id=17056096067&group_id=137191804778&ad_id=600073397511&placement=&keyword_id=kwd-308517531025&network=g&matchtype=p&utm_device=c&utm_term=prismic&utm_campaign=RoW_en_Search_Brand&utm_source=adwords&utm_medium=ppc&utm_content=Core&hsa_acc=4897815674&hsa_cam=17056096067&hsa_grp=137191804778&hsa_ad=600073397511&hsa_src=g&hsa_tgt=kwd-308517531025&hsa_kw=prismic&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwntCVBhDdARIsAMEwAClM5CExcU_LLTWKLtVh9kyJPfQGRLXImp8v5NEZ3i8qWh3asiqZqpAaAkLZEALw_wcB)
- [VUE.JS](https://vuejs.org/guide/introduction.html)

# Author
De ontwerpers en makers van deze website zijn: 
- [*ALana Eastman*](https://github.com/AlanaEastman)
- [*Nina Rijntjes*](https://github.com/n1en)
- [*Pip Harsveld*](https://github.com/PipHarsveld)
- [*Ryan Zoeters*](https://github.com/ryanzoeters69)

## License 
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]()

