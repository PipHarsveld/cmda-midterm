<template>
  <div class="indexContainer">
    <HeaderPaginaComp />
    <ArticleSection pos="" :content="singleText" />
    <BulletPointsComp />
    <ArticleSection pos="imgLeft" img="/TestImage.jpeg" :content="singleText" />
    <ArticleSection
      pos="imgRight"
      img="/TestImage.jpeg"
      :content="singleText"
    />
    <ArticleSection pos="" img="/TestImage.jpeg" :content="test" />
    <QuoteComp />
    <CardSwitch />
    <PopupComponent />
    <TimeLineComp />
    <SummaryComponent />
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data() {
    return {
      test: [
        '1You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don’t know exactly when we turned on each other, but I know that seven of us survived the slide… and only five made it out. Now we took an oath, that I’m breaking now. We said we’d say it was the snow that killed the other two, but it wasn’t. Nature is lethal but it doesn’t hold a candle to man.',
        '2Look, just because I don’t be givin’ no man a foot massage don’t make it right for Marsellus to throw Antwone into a glass motherfuckin’ house, fuckin’ up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, ’cause I’ll kill the motherfucker, know what I’m sayin’?',
        '3The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
      ],
      singleText: [
        'hallo dit is een beetje tekst via een data property hallo dit is een beetje tekst via een data property hallo dit is een beetje tekst via een data property hallo dit is een beetje tekst via een data property hallo dit is een beetje tekst via een data property hallo dit is een beetje tekst via een data pro',
      ],
    }
  },
}
</script>