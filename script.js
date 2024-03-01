

// Array of quotes for forgiveness
const forgiveness = [
    "Romans 12:17 Repay no one evil for evil, but give thought to do what is honorable in the sight of all.",
    "Ephesians 2:8 For by grace you have been saved through faith. And this is not your own doing; it is the gift of God. ",
    "Proverbs 15:1 A soft answer turns away wrath, but a harsh word stirs up anger.",
    "Matthew 5:7 Blessed are the merciful, for they shall receive mercy.",
    "Hebrews 8:12 For I will be merciful toward their iniquities, and I will remember their sins no more.",
    "John 13:34 A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.",
    "Chronicles 7:14 If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.",
    "Luke 17:3 If thy brother trespass against thee, rebuke him; and if he repent, ... If your brother sins, rebuke him, and if he repents, forgive him.",
    "Acts 10: 43 To him all the prophets bear witness that everyone who believes in him receives forgiveness of sins through his name.",
    "Matthew 5:23-24 So if you are offering your gift at the altar and there remember that your brother has something against you, leave your gift there before the altar and go. First be reconciled to your brother, and then come and offer your gift. ",
    "Isaiah 55:7 Let the wicked forsake his way, and the unrighteous man his thoughts; let him return to the Lord, that he may have compassion on him, and to our God, for he will abundantly pardon.",
    " 1 John 2:2 He is the propitiation for our sins, and not for ours only but also for the sins of the whole world.",
    "1 Peter 4:8 Above all, keep loving one another earnestly, since love covers a multitude of sins.",
    "Acts 17:30 The times of ignorance God overlooked, but now he commands all people everywhere to repent",
    "Isaiah 43:25 I am he who blots out your transgressions for my own sake, and I will not remember your sins.",
    " Matthew 6:14 For if you forgive other people when they sin against you, your heavenly father will also forgive you.",
    "Mark 11:25 And when you stand praying, if you hold anything against anyone, forgive them, so that your father in heaven may forgive you your sins. ",
    "1 John 2:12 I am writing to you, little children, because your sins are forgiven for his name's sake.",
    "Psalm 32:1 Blessed is the one whose transgressions are forgiven, whose sins are covered.",
    "Proverbs 17:9 Love prospers when a fault is forgiven, but dwelling on it separates close friends.",
    "Galatians 6:1 Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted.",
    "Daniel 9:9 The Lord our God is merciful and forgiving, even though we have rebelled against him.",
    "Isaiah 1:18 “Come now, let us settle the matter, says the Lord. Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool.",
    "Hebrews 10:17 Then he adds, “I will remember their sins and their lawless deeds no more.” ",
    "James 5:16 Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
    "Luke 6:27 But I say to you who hear: love your enemies, do good to those who hate you.",
    "Matthew 18:15 If your brother sins against you, go and tell him his fault, between you and him alone. If he listens to you, you have gained your brother.",
    "Ephesians 1:7-8 In him we have redemption through his blood, the forgiveness of sins, according to the riches of his grace, which he made to abound toward us in all wisdom and prudence.",
     "Luke 6:37 Do not judge, and you will not be judged. Do not condemn, and you will not be condemned. Forgive, and you will be forgiven.",
     "1 Peter 3:9 Do not repay evil for evil or reviling for reviling, but on the contrary, bless, for to this you were called, that you may obtain a blessing.",
     " Romans 6:23 For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
     "John 3:16-17 For God so loved the world that he gave his only son, that whoever believes in him should not perish but have eternal life. For God did not send his son into the world to condemn the world, but in order that the world might be saved through him.",
     "Matthew 18:21-22 Then Peter came to Jesus and asked, “Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?” Jesus answered, “I tell you, not seven times, but seventy-seven times.”",
     "Joel 2:13 Rend your heart and not your garments. Return to the Lord your God, for he is gracious and compassionate, slow to anger and abounding in love, and he relents from sending calamity.",
     "Psalm 65:3 Though we are overwhelmed by our sins, you forgive them all.",
     "Luke 7:47 I tell you, her sins — and they are many — have been forgiven, so she has shown me much love. But a person who is forgiven little shows only little love.",
     "Psalm 103:11-12 For his unfailing love toward those who fear him is as great as the height of the heavens above the earth. He has removed our sins as far from us as the east is from the west.",
     "Colossians 1:13-14 He has delivered us from the domain of darkness and transferred us to the kingdom of his beloved son, in whom we have redemption, the forgiveness of sins.",
     "Luke 23:34 And Jesus said, “Father, forgive them, for they know not what they do.” And they cast lots to divide his garments.",
     "Matthew 12:31 And so I tell you, every kind of sin and slander can be forgiven, but blasphemy against the spirit will not be forgiven.",
     "Acts 3:19 Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord.",
     "Ephesians 4:31 Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice.",
     "Matthew 6:12 And forgive us our debts, as we also have forgiven our debtors.",
     "Proverbs 10:12 Hatred stirs old quarrels, but love overlooks insults.",
     "1 John 1:9 If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
     "Matthew 6:15 But if you do not forgive others their sins, your father will not forgive your sins.",
     "2 Corinthians 5:17 Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
     "Psalm 86:5 You, Lord, are forgiving and good, abounding in love to all who call to you.",
     "Colossians 3:12-13 Put on then, as God's chosen ones, holy and beloved, compassionate hearts, kindness, humility, meekness, and patience, bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive."


    
];

// Function to display a random quote for forgiveness
function displayRandomAquariusQuote() {
    const randomIndex = Math.floor(Math.random() * forgiveness.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = forgiveness[randomIndex];
}

// Call the function to display a random quote for forgiveness
displayRandomAquariusQuote();





// Array of quotes for friendship
const friendship = [
    "Proverbs 18:24 A man of many companions may come to ruin, but there is a friend who sticks closer than a brother.",
    "Proverbs 27:17 Iron sharpens iron, and one man sharpens another.",
    "John 15:13 Greater love has no one than this, that someone lay down his life for his friends.",
    "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity.",
    "Ecclesiastes 4:9-10 Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!",
    "James 4:8 Draw near to God, and he will draw near to you. Cleanse your hands, you sinners, and purify your hearts, you double-minded.",
    "1 Thessalonians 5:11 Therefore encourage one another and build one another up, just as you are doing.",
    "Proverbs 27:9 Oil and perfume make the heart glad, and the sweetness of a friend comes from his earnest counsel.",
    "Romans 12:10 Love one another with brotherly affection. Outdo one another in showing honor.",
    "1 Corinthians 15:33 Do not be deceived: “Bad company ruins good morals.”",
    "Proverbs 13:20 Whoever walks with the wise becomes wise, but the companion of fools will suffer harm.",
    "Proverbs 22:24-25 Make no friendship with a man given to anger, nor go with a wrathful man, lest you learn his ways and entangle yourself in a snare.",
    "Ecclesiastes 4:12 And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken.",
    "John 13:34-35 A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another.",
    "Proverbs 27:6 Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
    "1 Peter 4:8 Above all, keep loving one another earnestly, since love covers a multitude of sins.",
    "1 John 4:7-8 Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God. Anyone who does not love does not know God, because God is love.",
    "Proverbs 12:26 One who is righteous is a guide to his neighbor, but the way of the wicked leads them astray.",
    "Proverbs 27:17 Iron sharpens iron, and one man sharpens another.",
    "Proverbs 27:5-6 Better is open rebuke than hidden love. Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
    "1 Corinthians 13:4-7 Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.",
    "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity.",
    "Ecclesiastes 4:9-12 Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up! Again, if two lie together, they keep warm, but how can one keep warm alone? And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken.",
    "Proverbs 18:24 A man of many companions may come to ruin, but there is a friend who sticks closer than a brother.",
    "Proverbs 27:17 Iron sharpens iron, and one man sharpens another.",
    "John 15:13 Greater love has no one than this, that someone lay down his life for his friends.",
    "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity.",
    "Ecclesiastes 4:9-10 Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!",
    "James 4:8 Draw near to God, and he will draw near to you. Cleanse your hands, you sinners, and purify your hearts, you double-minded.",
    "1 Thessalonians 5:11 Therefore encourage one another and build one another up, just as you are doing.",
    "Proverbs 27:9 Oil and perfume make the heart glad, and the sweetness of a friend comes from his earnest counsel.",
    "Romans 12:10 Love one another with brotherly affection. Outdo one another in showing honor.",
    "1 Corinthians 15:33 Do not be deceived: “Bad company ruins good morals.”",
    "Proverbs 13:20 Whoever walks with the wise becomes wise, but the companion of fools will suffer harm.",
    "Proverbs 22:24-25 Make no friendship with a man given to anger, nor go with a wrathful man, lest you learn his ways and entangle yourself in a snare.",
    "Ecclesiastes 4:12 And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken.",
    "John 13:34-35 A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another.",
    "Proverbs 27:6 Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
    "1 Peter 4:8 Above all, keep loving one another earnestly, since love covers a multitude of sins.",
    "1 John 4:7-8 Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God. Anyone who does not love does not know God, because God is love.",
    "Proverbs 12:26 One who is righteous is a guide to his neighbor, but the way of the wicked leads them astray.",
    "Proverbs 27:17 Iron sharpens iron, and one man sharpens another.",
    "Proverbs 27:5-6 Better is open rebuke than hidden love. Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
    "1 Corinthians 13:4-7 Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.",
    "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity.",
    "Ecclesiastes 4:9-12 Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up! Again, if two lie together, they keep warm, but how can one keep warm alone? And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken."
];

// Function to display a random quote for friendship
function displayRandomFriendshipQuote() {
    const randomIndex = Math.floor(Math.random() * friendship.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = friendship[randomIndex];
}

// Call the function to display a random quote for friendship
displayRandomFriendshipQuote();






// Array of quotes for giving categories
const giving = [
    "Acts 20:35 It is more blessed to give than to receive.",
    "Proverbs 11:25 A generous person will prosper; whoever refreshes others will be refreshed.",
    "Luke 6:38 Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.",
    "Acts 20:35 It is more blessed to give than to receive.",
    "Proverbs 11:25 A generous person will prosper; whoever refreshes others will be refreshed.",
    "Luke 6:38 Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.",
    "2 Corinthians 9:7 Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
    "Proverbs 19:17 Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done.",
    "Matthew 6:3-4 But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you.",
    "Malachi 3:10 Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.",
    "1 Timothy 6:18-19 Command them to do good, to be rich in good deeds, and to be generous and willing to share. In this way they will lay up treasure for themselves as a firm foundation for the coming age, so that they may take hold of the life that is truly life.",
    "Proverbs 22:9 The generous will themselves be blessed, for they share their food with the poor.",
    "Hebrews 13:16 And do not forget to do good and to share with others, for with such sacrifices God is pleased.",
    "2 Corinthians 9:10 Now he who supplies seed to the sower and bread for food will also supply and increase your store of seed and will enlarge the harvest of your righteousness.",
    "Proverbs 28:27 Those who give to the poor will lack nothing, but those who close their eyes to them receive many curses.",
    "Deuteronomy 15:10 Give generously to them and do so without a grudging heart; then because of this the Lord your God will bless you in all your work and in everything you put your hand to.",
    "Proverbs 3:27 Do not withhold good from those to whom it is due, when it is in your power to act.",
    "Luke 6:30 Give to everyone who asks you, and if anyone takes what belongs to you, do not demand it back.",
    "Romans 12:8 if it is to encourage, then give encouragement; if it is giving, then give generously; if it is to lead, do it diligently; if it is to show mercy, do it cheerfully.",
    "Proverbs 28:25 A greedy man stirs up strife, but the one who trusts in the Lord will be enriched.",
    "Mark 12:41-44 Jesus sat down opposite the place where the offerings were put and watched the crowd putting their money into the temple treasury. Many rich people threw in large amounts. But a poor widow came and put in two very small copper coins, worth only a few cents. Calling his disciples to him, Jesus said, “Truly I tell you, this poor widow has put more into the treasury than all the others. They all gave out of their wealth; but she, out of her poverty, put in everything—all she had to live on.",
    "Acts 2:44-45 All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need.",
    "Romans 13:7 Give to everyone what you owe them: If you owe taxes, pay taxes; if revenue, then revenue; if respect, then respect; if honor, then honor.",
    "2 Corinthians 9:11 You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.",
    "Matthew 5:42 Give to the one who asks you, and do not turn away from the one who wants to borrow from you.",
    "Proverbs 11:24-25 One person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed.",
    "Galatians 6:9-10 Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers."
    // Add more quotes here
];

// Function to display a random quote for giving categories
function displayRandomGivingQuote() {
    const randomIndex = Math.floor(Math.random() * giving.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = giving[randomIndex];
}

// Call the function to display a random quote for giving categories
displayRandomGivingQuote();










// Array of quotes for sadness
const sadness = [
    "Psalm 34:18 The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    "Psalm 30:5 ...weeping may stay for the night, but rejoicing comes in the morning.",
    "Matthew 5:4 Blessed are those who mourn, for they will be comforted.",
    "Psalm 34:18 The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    "Psalm 30:5 ...weeping may stay for the night, but rejoicing comes in the morning.",
    "Matthew 5:4 Blessed are those who mourn, for they will be comforted.",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "John 14:27 Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    "2 Corinthians 1:3-4 Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
    "Psalm 42:11 Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
    "Romans 8:18 I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
    "Psalm 147:3 He heals the brokenhearted and binds up their wounds.",
    "2 Corinthians 7:10 Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death.",
    "John 16:33 I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    "Psalm 40:1-3 I waited patiently for the Lord; he turned to me and heard my cry. He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand. He put a new song in my mouth, a hymn of praise to our God. Many will see and fear the Lord and put their trust in him.",
    "Lamentations 3:31-33 For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone.",
    "Psalm 73:26 My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
    "2 Corinthians 4:17-18 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.",
    "Psalm 22:24 For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.",
    "Psalm 147:3 He heals the brokenhearted and binds up their wounds.",
    "Psalm 30:11-12 You turned my wailing into dancing; you removed my sackcloth and clothed me with joy, that my heart may sing your praises and not be silent. Lord my God, I will praise you forever.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Romans 15:13 May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    "Psalm 126:5 Those who sow with tears will reap with songs of joy.",
    "Psalm 56:8 You keep track of all my sorrows. You have collected all my tears in your bottle. You have recorded each one in your book.",
    "Psalm 55:22 Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
    "Psalm 9:9 The Lord is a refuge for the oppressed, a stronghold in times of trouble.",
    "Isaiah 53:4-5 Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    "Romans 8:28 And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    "1 Peter 5:7 Cast all your anxiety on him because he cares for you."
    // Add more quotes here
];

// Function to display a random quote for sadness
function displayRandomSadnessQuote() {
    const randomIndex = Math.floor(Math.random() * sadness.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = sadness[randomIndex];
}

// Call the function to display a random quote for sadness
displayRandomSadnessQuote();










// Array of quotes for difficulties
const difficulties = [
    "James 1:2-4 Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    "Romans 8:18 I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
    "2 Corinthians 4:17 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.",
    "James 1:2-4 Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    "Romans 8:18 I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
    "2 Corinthians 4:17 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Psalm 34:17-19 The righteous cry out, and the Lord hears them; he delivers them from all their troubles. The Lord is close to the brokenhearted and saves those who are crushed in spirit. The righteous person may have many troubles, but the Lord delivers him from them all.",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "John 16:33 I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    "Romans 5:3-5 Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not put us to shame, because God’s love has been poured out into our hearts through the Holy Spirit, who has been given to us.",
    "Psalm 119:71 It was good for me to be afflicted so that I might learn your decrees.",
    "2 Corinthians 12:9-10 But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. That is why, for Christ’s sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "1 Peter 5:10 And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.",
    "Psalm 27:1 The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    "Psalm 55:22 Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
    "Isaiah 40:31 but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    "2 Thessalonians 3:3 But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
    "Romans 12:12 Be joyful in hope, patient in affliction, faithful in prayer.",
    "Psalm 34:19 The righteous person may have many troubles, but the Lord delivers him from them all.",
    "Psalm 138:7 Though I walk in the midst of trouble, you preserve my life. You stretch out your hand against the anger of my foes; with your right hand you save me.",
    "Psalm 62:8 Trust in him at all times, you people; pour out your hearts to him, for God is our refuge.",
    "Psalm 23:4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Romans 15:13 May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    "Isaiah 41:13 For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
    "2 Corinthians 4:8-9 We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed.",
    "Psalm 9:9 The Lord is a refuge for the oppressed, a stronghold in times of trouble.",
    "John 14:27 Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    "Psalm 55:22 Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
    "Psalm 34:17 When the righteous cry for help, the Lord hears and delivers them out of all their troubles.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.",
    "Psalm 34:4 I sought the Lord, and he answered me and delivered me from all my fears.",
    "Romans 5:3-4 Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope.",
    "James 1:12 Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.",
    "Romans 8:28 And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    "Isaiah 40:29 He gives power to the faint, and to him who has no might he increases strength.",
    "Philippians 4:6-7 do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    "Psalm 46:1-3 God is our refuge and strength, a very present help in trouble. Therefore we will not fear though the earth gives way, though the mountains be moved into the heart of the sea, though its waters roar and foam, though the mountains tremble at its swelling.",
    "1 Peter 5:7 casting all your anxieties on him, because he cares for you.",
    "John 16:33 I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
    "Psalm 55:22 Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
    "2 Corinthians 4:8-10 We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed; always carrying in the body the death of Jesus, so that the life of Jesus may also be manifested in our bodies.",
    "Psalm 145:18 The Lord is near to all who call on him, to all who call on him in truth.",
    "John 14:1 Let not your hearts be troubled. Believe in God; believe also in me.",
    "Psalm 119:50 This is my comfort in my affliction, that your promise gives me life.",
    "Psalm 50:15 and call upon me in the day of trouble; I will deliver you, and you shall glorify me.",
    "Romans 8:35-39 Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword? As it is written, “For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.” No, in all these things we are more than conquerors through him who loved us. For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "Psalm 91:1-16 He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, “My refuge and my fortress, my God, in whom I trust.” For he will deliver you from the snare of the fowler and from the deadly pestilence. He will cover you with his pinions, and under his wings you will find refuge; his faithfulness is a shield and buckler. You will not fear the terror of the night, nor the arrow that flies by day, ...",
    "Psalm 119:71 It is good for me that I was afflicted, that I might learn your statutes.",
    "Romans 15:4 For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope.",
    "Psalm 55:22 Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
    "Philippians 4:13 I can do all things through him who strengthens me.",
    "Psalm 91:1 He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.",
    "2 Corinthians 12:9 But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.",
    "Isaiah 26:3 You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
    "Psalm 34:19 Many are the afflictions of the righteous, but the Lord delivers him out of them all.",
    "Psalm 23:4 Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 37:39 The salvation of the righteous is from the Lord; he is their stronghold in the time of trouble.",
    "Romans 8:28-30 And we know that for those who love God all things work together for good, for those who are called according to his purpose. For those whom he foreknew he also predestined to be conformed to the image of his Son, in order that he might be the firstborn among many brothers. And those whom he predestined he also called, and those whom he called he also justified, and those whom he justified he also glorified.",
    "Isaiah 43:1-3 But now thus says the Lord, he who created you, O Jacob, he who formed you, O Israel: “Fear not, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you. For I am the Lord your God, the Holy One of Israel, your Savior. I give Egypt as your ransom, Cush and Seba in exchange for you.",
    "Romans 8:31 What then shall we say to these things? If God is for us, who can be against us?",
    "Philippians 4:6-8 do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.",
    "Romans 8:38-39 For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "Isaiah 40:29-31 He gives power to the faint, and to him who has no might he increases strength. Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    "Hebrews 4:16 Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.",
    "John 14:27 Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
    "Psalm 121:1-8 I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. He will not let your foot be moved; he who keeps you will not slumber. Behold, he who keeps Israel will neither slumber nor sleep. The Lord is your keeper; the Lord is your shade on your right hand. ...",
    "Psalm 119:71-72 It is good for me that I was afflicted, that I might learn your statutes. The law of your mouth is better to me than thousands of gold and silver pieces.",
    "Psalm 145:18-19 The Lord is near to all who call on him, to all who call on him in truth. He fulfills the desire of those who fear him; he also hears their cry and saves them.",
    "1 Corinthians 10:13 No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.",
    "2 Corinthians 4:8-9 We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed;",
    "Philippians 4:6-7 do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    "Philippians 4:19 And my God will supply every need of yours according to his riches in glory in Christ Jesus.",
    "Romans 8:26 Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.",
    "1 Peter 4:12 Beloved, do not be surprised at the fiery trial when it comes upon you to test you, as though something strange were happening to you.",
    "Psalm 18:2 The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold.",
    "Psalm 34:17 When the righteous cry for help, the Lord hears and delivers them out of all their troubles.",
    "Psalm 34:18 The Lord is near to the brokenhearted and saves the crushed in spirit.",
    "Psalm 37:39 But the salvation of the righteous is from the Lord; he is their stronghold in the time of trouble.",
    "Psalm 42:11 Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.",
    "Psalm 46:1 To the choirmaster. Of the Sons of Korah. According to Alamoth. A Song. God is our refuge and strength, a very present help in trouble.",
    "Psalm 55:22 Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
    "Psalm 119:50 This is my comfort in my affliction, that your promise gives me life.",
    "Isaiah 12:2 “Behold, God is my salvation; I will trust, and will not be afraid; for the Lord God is my strength and my song, and he has become my salvation.”",
    "Isaiah 26:3 You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
    "Isaiah 41:10 Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    "Isaiah 41:13 For I, the Lord your God, hold your right hand; it is I who say to you, “Fear not, I am the one who helps you.”",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.",
    "Isaiah 43:5 Fear not, for I am with you; I will bring your offspring from the east, and from the west I will gather you.",
    "Isaiah 43:18-19 Remember not the former things, nor consider the things of old. Behold, I am doing a new thing; now it springs forth, do you not perceive it? I will make a way in the wilderness and rivers in the desert.",
    "Isaiah 49:15-16 “Can a woman forget her nursing child, that she should have no compassion on the son of her womb? Even these may forget, yet I will not forget you. Behold, I have engraved you on the palms of my hands; your walls are continually before me.”",
    "Isaiah 50:7 But the Lord God helps me; therefore I have not been disgraced; therefore I have set my face like a flint, and I know that I shall not be put to shame.",
    "Isaiah 51:12-13 “I, I am he who comforts you; who are you that you are afraid of man who dies, of the son of man who is made like grass, and have forgotten the Lord, your Maker, who stretched out the heavens and laid the foundations of the earth, and you fear continually all the day because of the wrath of the oppressor, when he sets himself to destroy? And where is the wrath of the oppressor?”",
    "Isaiah 54:17 no weapon that is fashioned against you shall succeed, and you shall confute every tongue that rises against you in judgment. This is the heritage of the servants of the Lord and their vindication from me, declares the Lord.”",
    "Jeremiah 29:11 For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    "Jeremiah 32:17 ‘Ah, Lord God! It is you who have made the heavens and the earth by your great power and by your outstretched arm! Nothing is too hard for you.",
    "Jeremiah 33:3 Call to me and I will answer you, and will tell you great and hidden things that you have not known.",
    "Lamentations 3:22-23 The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    "Lamentations 3:31-33 For the Lord will not cast off forever, but, though he cause grief, he will have compassion according to the abundance of his steadfast love; for he does not afflict from his heart or grieve the children of men.",
    "Lamentations 3:55-56 “I called on your name, O Lord, from the depths of the pit; you heard my plea, ‘Do not close your ear to my cry for help!’",
    "Matthew 6:34 “Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.",
    "Matthew 11:28-30 Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.”",
    "John 14:27 Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
    "John 16:33 I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.”",
    "Romans 5:1-5 Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ. Through him we have also obtained access by faith into this grace in which we stand, and we rejoice in hope of the glory of God. Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God's love has been poured into our hearts through the Holy Spirit who has been given to us.",
    "Romans 8:18 For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.",
    "Romans 8:28 And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    "Romans 8:31 What then shall we say to these things? If God is for us, who can be against us?",
    "Romans 8:35-39 Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword? As it is written, “For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.” No, in all these things we are more than conquerors through him who loved us. For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "2 Corinthians 1:3-4 Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.",
    "2 Corinthians 4:8-10 We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed; always carrying in the body the death of Jesus, so that the life of Jesus may also be manifested in our bodies.",
    "2 Corinthians 4:16-18 So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.",
    "2 Corinthians 12:9-10 But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me. For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities. For when I am weak, then I am strong.",
    "Ephesians 3:20-21 Now to him who is able to do far more abundantly than all that we ask or think, according to the power at work within us, to him be glory in the church and in Christ Jesus throughout all generations, forever and ever. Amen.",
    "Philippians 4:6-7 do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    "Philippians 4:13 I can do all things through him who strengthens me.",
    "Philippians 4:19 And my God will supply every need of yours according to his riches in glory in Christ Jesus.",
    "Hebrews 4:16 Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.",
    "Hebrews 12:1-2 Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.",
    "James 1:2-4 Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",
    "1 Peter 5:6-7 Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxieties on him, because he cares for you.",
    "1 Peter 5:10 And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, confirm, strengthen, and establish you.",
    "1 John 1:9 If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
    "1 John 4:4 Little children, you are from God and have overcome them, for he who is in you is greater than he who is in the world.",
    "Revelation 21:4 He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.”"

    // Add more quotes here
];

// Function to display a random quote for difficulties
function displayRandomDifficultiesQuote() {
    const randomIndex = Math.floor(Math.random() * difficulties.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = difficulties[randomIndex];
}

// Call the function to display a random quote for difficulties
displayRandomDifficultiesQuote();






// Array of quotes for serving
const serving = [
    "Galatians 5:13 You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.",
    "1 Peter 4:10 Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.",
    "Mark 10:45 For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    "Matthew 23:11 The greatest among you will be your servant.",
    "Mark 9:35 Sitting down, Jesus called the Twelve and said, 'Anyone who wants to be first must be the very last, and the servant of all.'",
    "John 13:14-15 Now that I, your Lord and Teacher, have washed your feet, you also should wash one another's feet. I have set you an example that you should do as I have done for you.",
    "Galatians 6:2 Carry each other’s burdens, and in this way you will fulfill the law of Christ.",
    "Philippians 2:3-4 Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.",
    "1 Timothy 4:12 Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
    "1 Peter 4:11 If anyone serves, they should do so with the strength God provides, so that in all things God may be praised through Jesus Christ. To him be the glory and the power for ever and ever. Amen.",
    "Colossians 3:23-24 Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    "Hebrews 6:10 God is not unjust; he will not forget your work and the love you have shown him as you have helped his people and continue to help them.",
    "1 Peter 5:2-3 Be shepherds of God’s flock that is under your care, watching over them—not because you must, but because you are willing, as God wants you to be; not pursuing dishonest gain, but eager to serve; not lording it over those entrusted to you, but being examples to the flock.",
    "Ephesians 2:10 For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
    "Romans 12:11 Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.",
    "Colossians 3:17 And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
    "1 Corinthians 15:58 Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
    "Luke 6:38 Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.",
    "Romans 12:1 Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.",
    "Hebrews 13:16 And do not forget to do good and to share with others, for with such sacrifices God is pleased.",
    "1 Peter 4:10 Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.",
    "Mark 10:45 For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    "Matthew 25:40 The King will reply, ‘Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.’",
    "Galatians 5:13 You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.",
    "Philippians 2:3-4 Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.",
    "Matthew 20:28 Just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    "Romans 12:10 Be devoted to one another in love. Honor one another above yourselves.",
    "Ephesians 6:7 Serve wholeheartedly, as if you were serving the Lord, not people.",
    "Colossians 3:23-24 Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    "1 Corinthians 15:58 Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
    "Galatians 6:9 Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
    "John 12:26 Whoever serves me must follow me; and where I am, my servant also will be. My Father will honor the one who serves me.",
    "1 Timothy 4:12 Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
    "Luke 6:38 Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you."
    // Add more quotes here
];

// Function to display a random quote for serving
function displayRandomServingQuote() {
    const randomIndex = Math.floor(Math.random() * serving.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = serving[randomIndex];
}

// Call the function to display a random quote for serving
displayRandomServingQuote();







// Array of quotes for rewards
const rewards = [
    "Matthew 6:20 But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal.",
    "1 Corinthians 3:14 If what has been built survives, the builder will receive a reward.",
    "Colossians 3:23-24 Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    "Matthew 5:12 Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you.",
    "Hebrews 11:6 And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.",
    "Revelation 22:12 Look, I am coming soon! My reward is with me, and I will give to each person according to what they have done.",
    "Luke 6:23 Rejoice in that day and leap for joy, because great is your reward in heaven. For that is how their ancestors treated the prophets.",
    "1 Corinthians 9:24-25 Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize. Everyone who competes in the games goes into strict training. They do it to get a crown that will not last, but we do it to get a crown that will last forever.",
    "2 John 1:8 Watch out that you do not lose what we have worked for, but that you may be rewarded fully.",
    "Psalm 19:11 Moreover, by them is your servant warned; in keeping them there is great reward.",
    "Matthew 10:41-42 Whoever welcomes a prophet as a prophet will receive a prophet’s reward, and whoever welcomes a righteous person as a righteous person will receive a righteous person’s reward. And if anyone gives even a cup of cold water to one of these little ones who is my disciple, truly I tell you, that person will certainly not lose their reward.",
    "Proverbs 25:21-22 If your enemy is hungry, give him food to eat; if he is thirsty, give him water to drink. In doing this, you will heap burning coals on his head, and the Lord will reward you.",
    "Matthew 16:27 For the Son of Man is going to come in his Father’s glory with his angels, and then he will reward each person according to what they have done.",
    "Hebrews 10:35 So do not throw away your confidence; it will be richly rewarded.",
    "Matthew 6:4 so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you.",
    "Luke 14:13-14 But when you give a banquet, invite the poor, the crippled, the lame, the blind, and you will be blessed. Although they cannot repay you, you will be repaid at the resurrection of the righteous.",
    "Colossians 3:24 since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    "Hebrews 11:26 He regarded disgrace for the sake of Christ as of greater value than the treasures of Egypt, because he was looking ahead to his reward.",
    "Matthew 6:6 But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you.",
    "Luke 6:35 But love your enemies, do good to them, and lend to them without expecting to get anything back. Then your reward will be great, and you will be children of the Most High, because he is kind to the ungrateful and wicked.",
    "2 Timothy 4:8 Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day—and not only to me, but also to all who have longed for his appearing.",
    "Revelation 2:10 Do not be afraid of what you are about to suffer. I tell you, the devil will put some of you in prison to test you, and you will suffer persecution for ten days. Be faithful, even to the point of death, and I will give you life as your victor’s crown.",
    "1 Peter 5:4 And when the Chief Shepherd appears, you will receive the crown of glory that will never fade away.",
    "Matthew 5:46 For if you love those who love you, what reward do you have? Do not even the tax collectors do the same?",
    "Luke 6:35 But love your enemies, and do good, and lend, expecting nothing in return, and your reward will be great, and you will be sons of the Most High, for he is kind to the ungrateful and the evil.",
    "Colossians 3:23-24 Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.",
    "2 John 1:8 Watch yourselves, so that you may not lose what we have worked for, but may win a full reward.",
    "Hebrews 11:6 And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.",
    "Matthew 6:1-4 Beware of practicing your righteousness before other people in order to be seen by them, for then you will have no reward from your Father who is in heaven. Thus, when you give to the needy, sound no trumpet before you, as the hypocrites do in the synagogues and in the streets, that they may be praised by others. Truly, I say to you, they have received their reward. But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. And your Father who sees in secret will reward you."
    // Add more quotes here
];

// Function to display a random quote for rewards
function displayRandomRewardsQuote() {
    const randomIndex = Math.floor(Math.random() * rewards.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = rewards[randomIndex];
}

// Call the function to display a random quote for rewards
displayRandomRewardsQuote();







// Array of quotes for grace
const grace = [
    "Romans 3:24 and all are justified freely by his grace through the redemption that came by Christ Jesus.",
    "Ephesians 2:8-9 For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
    "2 Corinthians 12:9 But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.",
    "Romans 5:20-21 But where sin increased, grace increased all the more, so that, just as sin reigned in death, so also grace might reign through righteousness to bring eternal life through Jesus Christ our Lord.",
    "Titus 2:11 For the grace of God has appeared that offers salvation to all people.",
    "Hebrews 4:16 Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
    "James 4:6 But he gives us more grace. That is why Scripture says: 'God opposes the proud but shows favor to the humble.'",
    "1 Peter 5:10 And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.",
    "Ephesians 1:7 In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace.",
    "Ephesians 2:5 made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.",
    "Ephesians 2:8-9 For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
    "2 Timothy 1:9 He has saved us and called us to a holy life—not because of anything we have done but because of his own purpose and grace. This grace was given us in Christ Jesus before the beginning of time.",
    "Titus 2:11 For the grace of God has appeared that offers salvation to all people.",
    "Romans 5:20-21 But where sin increased, grace increased all the more, so that, just as sin reigned in death, so also grace might reign through righteousness to bring eternal life through Jesus Christ our Lord.",
    "Hebrews 4:16 Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
    "James 4:6 But he gives us more grace. That is why Scripture says: 'God opposes the proud but shows favor to the humble.'",
    "1 Peter 5:10 And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.",
    "2 Corinthians 9:8 And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.",
    "Ephesians 2:4-5 But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.",
    "John 1:16 Out of his fullness we have all received grace in place of grace already given.",
    "Titus 2:11 For the grace of God has appeared that offers salvation to all people.",
    "Ephesians 1:7-8 In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace that he lavished on us. With all wisdom and understanding.",
    "2 Timothy 1:9 He has saved us and called us to a holy life—not because of anything we have done but because of his own purpose and grace. This grace was given us in Christ Jesus before the beginning of time.",
    "Hebrews 12:15 See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.",
    "1 Peter 1:13 Therefore, with minds that are alert and fully sober, set your hope on the grace to be brought to you when Jesus Christ is revealed at his coming.",
    "2 Peter 3:18 But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen.",
    "Romans 6:14 For sin shall no longer be your master, because you are not under the law, but under grace.",
    "Romans 11:6 And if by grace, then it cannot be based on works; if it were, grace would no longer be grace.",
    "James 1:17 Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
    // Add more quotes here
];

// Function to display a random quote for grace
function displayRandomGraceQuote() {
    const randomIndex = Math.floor(Math.random() * grace.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = grace[randomIndex];
}

// Call the function to display a random quote for grace
displayRandomGraceQuote();







// Array of quotes for community
const community = [
    "Acts 2:44-45 All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need.",
    "1 Peter 4:10 Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.",
    "Galatians 6:2 Carry each other’s burdens, and in this way, you will fulfill the law of Christ.",
    "Romans 12:4-5 For just as each of us has one body with many members, and these members do not all have the same function, so in Christ we, though many, form one body, and each member belongs to all the others.",
    "1 Corinthians 12:25-27 so that there should be no division in the body, but that its parts should have equal concern for each other. If one part suffers, every part suffers with it; if one part is honored, every part rejoices with it. Now you are the body of Christ, and each one of you is a part of it.",
    "Hebrews 10:24-25 And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.",
    "Ephesians 4:2-3 Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit through the bond of peace.",
    "Colossians 3:12-14 Therefore, as God’s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience. Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you. And over all these virtues put on love, which binds them all together in perfect unity.",
    "1 Thessalonians 5:11 Therefore encourage one another and build each other up, just as in fact you are doing.",
    "1 Corinthians 1:10 I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ, that all of you agree with one another in what you say and that there be no divisions among you, but that you be perfectly united in mind and thought.",
    "Philippians 2:3-4 Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.",
    "Proverbs 27:17 As iron sharpens iron, so one person sharpens another.",
    "1 John 1:7 But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin.",
    "Galatians 6:10 Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.",
    "Hebrews 13:16 And do not forget to do good and to share with others, for with such sacrifices God is pleased.",
    "Romans 15:5-6 May the God who gives endurance and encouragement give you the same attitude of mind toward each other that Christ Jesus had, so that with one mind and one voice you may glorify the God and Father of our Lord Jesus Christ.",
    "1 Peter 3:8 Finally, all of you, be like-minded, be sympathetic, love one another, be compassionate and humble.",
    "Colossians 3:15 Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
    "Hebrews 10:24 And let us consider how we may spur one another on toward love and good deeds,",
    "James 5:16 Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.",
    "Ephesians 4:32 Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
    "1 Thessalonians 5:14 And we urge you, brothers and sisters, warn those who are idle and disruptive, encourage the disheartened, help the weak, be patient with everyone.",
    "Romans 12:16 Live in harmony with one another. Do not be proud, but be willing to associate with people of low position. Do not be conceited.",
    "1 Corinthians 12:26 If one part suffers, every part suffers with it; if one part is honored, every part rejoices with it.",
    "Hebrews 10:25 not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.",
    // Add more quotes here
];

// Function to display a random quote for community
function displayRandomCommunityQuote() {
    const randomIndex = Math.floor(Math.random() * community.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = community[randomIndex];
}

// Call the function to display a random quote for community
displayRandomCommunityQuote();









// Array of quotes for courage
const courage = [
    "Joshua 1:9 Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    "Psalm 27:1 The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Deuteronomy 31:6 Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
    "1 Corinthians 16:13 Be on your guard; stand firm in the faith; be courageous; be strong.",
    "Psalm 56:3-4 When I am afraid, I put my trust in you. In God, whose word I praise— in God I trust and am not afraid. What can mere mortals do to me?",
    "Isaiah 43:1-2 Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "2 Timothy 1:7 For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    "Psalm 23:4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 118:6 The Lord is with me; I will not be afraid. What can mere mortals do to me?",
    "Romans 8:31 What, then, shall we say in response to these things? If God is for us, who can be against us?",
    "Joshua 1:7 Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go.",
    "Psalm 112:7 They will have no fear of bad news; their hearts are steadfast, trusting in the Lord.",
    "Isaiah 54:17 No weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
    "1 Chronicles 28:20 David also said to Solomon his son, 'Be strong and courageous, and do the work. Do not be afraid or discouraged, for the Lord God, my God, is with you. He will not fail you or forsake you until all the work for the service of the temple of the Lord is finished.'",
    "Psalm 31:24 Be strong and take heart, all you who hope in the Lord.",
    "Psalm 34:4 I sought the Lord, and he answered me; he delivered me from all my fears.",
    "Psalm 112:7 They will have no fear of bad news; their hearts are steadfast, trusting in the Lord.",
    "Isaiah 12:2 Surely God is my salvation; I will trust and not be afraid. The Lord, the Lord himself, is my strength and my defense; he has become my salvation.",
    "Isaiah 35:4 say to those with fearful hearts, 'Be strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.'",
    "Isaiah 40:29-31 He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    "Isaiah 41:13 For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
    "Isaiah 54:4 'Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated. You will forget the shame of your youth and remember no more the reproach of your widowhood.'",
    "Daniel 10:19 'Do not be afraid, you who are highly esteemed,' he said. 'Peace! Be strong now; be strong.' When he spoke to me, I was strengthened and said, 'Speak, my lord, since you have given me strength.'",
    "1 Corinthians 16:13 Be on your guard; stand firm in the faith; be courageous; be strong.",
    "2 Timothy 1:7 For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    "Hebrews 13:6 So we say with confidence, 'The Lord is my helper; I will not be afraid. What can mere mortals do to me?'",
    "Deuteronomy 31:6 Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
    "Joshua 1:7 Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go.",
    "Joshua 1:9 Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    "1 Chronicles 28:20 David also said to Solomon his son, 'Be strong and courageous, and do the work. Do not be afraid or discouraged, for the Lord God, my God, is with you. He will not fail you or forsake you until all the work for the service of the temple of the Lord is finished.'",
    "Psalm 27:1 The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    "Psalm 31:24 Be strong and take heart, all you who hope in the Lord.",
    "Psalm 56:3-4 When I am afraid, I put my trust in you. In God, whose word I praise— in God I trust and am not afraid. What can mere mortals do to me?",
    "Psalm 112:7 They will have no fear of bad news; their hearts are steadfast, trusting in the Lord.",
    "Isaiah 12:2 Surely God is my salvation; I will trust and not be afraid. The Lord, the Lord himself, is my strength and my defense; he has become my salvation.",
    "Isaiah 35:4 say to those with fearful hearts, 'Be strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.'",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Isaiah 41:13 For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
    "Isaiah 43:1-2 Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Daniel 10:19 'Do not be afraid, you who are highly esteemed,' he said. 'Peace! Be strong now; be strong.' When he spoke to me, I was strengthened and said, 'Speak, my lord, since you have given me strength.'",
    "Matthew 10:28 Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.",
    "Mark 6:50 Immediately he spoke to them and said, 'Take courage! It is I. Don’t be afraid.'",
    "John 16:33 'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.'",
    "Acts 18:9-10 One night the Lord spoke to Paul in a vision: 'Do not be afraid; keep on speaking, do not be silent. For I am with you, and no one is going to attack and harm you, because I have many people in this city.'",
    "Romans 8:31 What, then, shall we say in response to these things? If God is for us, who can be against us?",
    "1 Corinthians 16:13 Be on your guard; stand firm in the faith; be courageous; be strong.",
    "2 Timothy 1:7 For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    "Hebrews 13:6 So we say with confidence, 'The Lord is my helper; I will not be afraid. What can mere mortals do to me?'",

    // Add more quotes here
];

// Function to display a random quote for courage
function displayRandomCourageQuote() {
    const randomIndex = Math.floor(Math.random() * courage.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = courage[randomIndex];
}

// Call the function to display a random quote for courage
displayRandomCourageQuote();



// Array of quotes for thankfulness
const thankfulness = [
    "1 Thessalonians 5:18 give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
    "Psalm 107:1 Give thanks to the Lord, for he is good; his love endures forever.",
    "Colossians 3:15 Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
    "1 Chronicles 16:34 Give thanks to the Lord, for he is good; his love endures forever.",
    "Psalm 100:4 Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
    "Ephesians 5:20 always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.",
    "Philippians 4:6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    "Colossians 4:2 Devote yourselves to prayer, being watchful and thankful.",
    "1 Thessalonians 5:16-18 Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
    "Hebrews 12:28 Therefore, since we are receiving a kingdom that cannot be shaken, let us be thankful, and so worship God acceptably with reverence and awe.",
    "James 1:17 Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
    "Revelation 7:12 saying: 'Amen! Praise and glory and wisdom and thanks and honor and power and strength be to our God for ever and ever. Amen!'",
    "Psalm 118:1 Give thanks to the Lord, for he is good; his love endures forever.",
    "Psalm 95:2 Let us come before him with thanksgiving and extol him with music and song.",
    "1 Corinthians 1:4 I always thank my God for you because of his grace given you in Christ Jesus.",
    "2 Corinthians 9:11 You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.",
    "2 Corinthians 2:14 But thanks be to God, who always leads us as captives in Christ’s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere.",
    "Colossians 2:6-7 So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness.",
    "Colossians 3:17 And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
    "Colossians 4:2 Devote yourselves to prayer, being watchful and thankful.",
    "1 Timothy 4:4 For everything God created is good, and nothing is to be rejected if it is received with thanksgiving,",
    "Hebrews 13:15 Through Jesus, therefore, let us continually offer to God a sacrifice of praise—the fruit of lips that openly profess his name.",
    "Revelation 11:17 saying: 'We give thanks to you, Lord God Almighty, the One who is and who was, because you have taken your great power and have begun to reign.'",
    "1 Thessalonians 1:2 We always thank God for all of you and continually mention you in our prayers.",
    "Psalm 136:1 Give thanks to the Lord, for he is good. His love endures forever.",
    "Psalm 95:2 Let us come before him with thanksgiving and extol him with music and song.",
    "Ephesians 1:16 I have not stopped giving thanks for you, remembering you in my prayers.",
    "Colossians 3:15 Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
    "Colossians 4:2 Devote yourselves to prayer, being watchful and thankful.",
    "1 Timothy 2:1 I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people—",
    "Psalm 106:1 Praise the Lord. Give thanks to the Lord, for he is good; his love endures forever.",
    "Philippians 1:3 I thank my God every time I remember you.",
    "Colossians 1:3 We always thank God, the Father of our Lord Jesus Christ, when we pray for you,",
    "1 Thessalonians 5:18 give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
    "2 Corinthians 9:11 You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.",
    "Hebrews 13:15 Through Jesus, therefore, let us continually offer to God a sacrifice of praise—the fruit of lips that openly profess his name.",
    "Colossians 3:17 And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
    "Philippians 4:6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    "1 Corinthians 1:4 I always thank my God for you because of his grace given you in Christ Jesus.",
    "Ephesians 5:20 always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.",
    "1 Thessalonians 3:9 How can we thank God enough for you in return for all the joy we have in the presence of our God because of you?",
    "Psalm 118:1 Give thanks to the Lord, for he is good; his love endures forever.",
    // Add more quotes here
];

// Function to display a random quote for thankfulness
function displayRandomThankfulnessQuote() {
    const randomIndex = Math.floor(Math.random() * thankfulness.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = thankfulness[randomIndex];
}

// Call the function to display a random quote for thankfulness
displayRandomThankfulnessQuote();







// Array of quotes for protection
const protection = [
    "Psalm 91:11 For he will command his angels concerning you to guard you in all your ways.",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Psalm 121:7-8 The Lord will keep you from all harm— he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
    "Psalm 18:2 The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
    "Proverbs 18:10 The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    "Psalm 91:4 He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
    "Psalm 34:7 The angel of the Lord encamps around those who fear him, and he delivers them.",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "Psalm 27:1 The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?",
    "Isaiah 54:17 no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
    "Psalm 91:1-2 Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
    "Psalm 34:17 The righteous cry out, and the Lord hears them; he delivers them from all their troubles.",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "2 Thessalonians 3:3 But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
    "Psalm 23:4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 18:30 As for God, his way is perfect: The Lord’s word is flawless; he shields all who take refuge in him.",
    "Psalm 46:7 The Lord Almighty is with us; the God of Jacob is our fortress.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Psalm 91:9-11 If you say, 'The Lord is my refuge,' and you make the Most High your dwelling, no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways;",
    "Psalm 121:3-4 He will not let your foot slip— he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep.",
    "Psalm 91:14 'Because he loves me,' says the Lord, 'I will rescue him; I will protect him, for he acknowledges my name.'",
    "Psalm 91:15 He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.",
    "Psalm 34:7 The angel of the Lord encamps around those who fear him, and he delivers them.",
    "Psalm 121:7-8 The Lord will keep you from all harm— he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
    "Proverbs 18:10 The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    "Psalm 18:2 The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
    "Psalm 91:4 He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
    "Psalm 91:1-2 Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
    "Psalm 27:1 The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?",
    "Isaiah 54:17 no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
    "Psalm 91:9-11 If you say, 'The Lord is my refuge,' and you make the Most High your dwelling, no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways;",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "Psalm 121:3-4 He will not let your foot slip— he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Psalm 91:14 'Because he loves me,' says the Lord, 'I will rescue him; I will protect him, for he acknowledges my name.'",
    "Psalm 91:15 He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.",
    "2 Thessalonians 3:3 But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
    "Psalm 46:7 The Lord Almighty is with us; the God of Jacob is our fortress.",
    "Psalm 18:30 As for God, his way is perfect: The Lord’s word is flawless; he shields all who take refuge in him.",
    "Psalm 23:4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 91:2 I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
    "Psalm 121:5-6 The Lord watches over you— the Lord is your shade at your right hand; the sun will not harm you by day, nor the moon by night.",
    "Psalm 121:8 the Lord will watch over your coming and going both now and forevermore.",
    "Isaiah 26:3 You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
    "Isaiah 54:17 no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
    "2 Thessalonians 3:3 But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
    "Psalm 18:2 The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
    "Proverbs 18:10 The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    "Psalm 121:7-8 The Lord will keep you from all harm— he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "Psalm 91:9-11 If you say, 'The Lord is my refuge,' and you make the Most High your dwelling, no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways;",
    "Psalm 46:7 The Lord Almighty is with us; the God of Jacob is our fortress.",
    "Psalm 91:14 'Because he loves me,' says the Lord, 'I will rescue him; I will protect him, for he acknowledges my name.'",
    "Psalm 91:15 He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.",
    "Proverbs 3:5-6 Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    "Psalm 62:8 Trust in him at all times, you people; pour out your hearts to him, for God is our refuge.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Psalm 34:7 The angel of the Lord encamps around those who fear him, and he delivers them.",
    "Psalm 91:4 He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
    "Psalm 91:1-2 Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
    "Psalm 27:1 The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?",
    "Isaiah 41:13 For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
    // Add more quotes here
];

// Function to display a random quote for protection
function displayRandomProtectionQuote() {
    const randomIndex = Math.floor(Math.random() * protection.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = protection[randomIndex];
}

// Call the function to display a random quote for protection
displayRandomProtectionQuote();





// Array of Bible quotes
const bibleQuotes = [
    // Add your Bible quotes here
    "John 3:16 For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    "Philippians 4:13 I can do all things through him who strengthens me.",
    "Jeremiah 29:11 For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    // Add more quotes as needed
    "Romans 12:17 Repay no one evil for evil, but give thought to do what is honorable in the sight of all.",
    "Ephesians 2:8 For by grace you have been saved through faith. And this is not your own doing; it is the gift of God. ",
    "Proverbs 15:1 A soft answer turns away wrath, but a harsh word stirs up anger.",
    "Matthew 5:7 Blessed are the merciful, for they shall receive mercy.",
    "Hebrews 8:12 For I will be merciful toward their iniquities, and I will remember their sins no more.",
    "John 13:34 A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.",
    "Chronicles 7:14 If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.",
    "Luke 17:3 If thy brother trespass against thee, rebuke him; and if he repent, ... If your brother sins, rebuke him, and if he repents, forgive him.",
    "Acts 10: 43 To him all the prophets bear witness that everyone who believes in him receives forgiveness of sins through his name.",
    "Matthew 5:23-24 So if you are offering your gift at the altar and there remember that your brother has something against you, leave your gift there before the altar and go. First be reconciled to your brother, and then come and offer your gift. ",
    "Isaiah 55:7 Let the wicked forsake his way, and the unrighteous man his thoughts; let him return to the Lord, that he may have compassion on him, and to our God, for he will abundantly pardon.",
    " 1 John 2:2 He is the propitiation for our sins, and not for ours only but also for the sins of the whole world.",
    "1 Peter 4:8 Above all, keep loving one another earnestly, since love covers a multitude of sins.",
    "Acts 17:30 The times of ignorance God overlooked, but now he commands all people everywhere to repent",
    "Isaiah 43:25 I am he who blots out your transgressions for my own sake, and I will not remember your sins.",
    " Matthew 6:14 For if you forgive other people when they sin against you, your heavenly father will also forgive you.",
    "Mark 11:25 And when you stand praying, if you hold anything against anyone, forgive them, so that your father in heaven may forgive you your sins. ",
    "1 John 2:12 I am writing to you, little children, because your sins are forgiven for his name's sake.",
    "Psalm 32:1 Blessed is the one whose transgressions are forgiven, whose sins are covered.",
    "Proverbs 17:9 Love prospers when a fault is forgiven, but dwelling on it separates close friends.",
    "Galatians 6:1 Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted.",
    "Daniel 9:9 The Lord our God is merciful and forgiving, even though we have rebelled against him.",
    "Isaiah 1:18 “Come now, let us settle the matter, says the Lord. Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool.",
    "Hebrews 10:17 Then he adds, “I will remember their sins and their lawless deeds no more.” ",
    "James 5:16 Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
    "Luke 6:27 But I say to you who hear: love your enemies, do good to those who hate you.",
    "Matthew 18:15 If your brother sins against you, go and tell him his fault, between you and him alone. If he listens to you, you have gained your brother.",
    "Ephesians 1:7-8 In him we have redemption through his blood, the forgiveness of sins, according to the riches of his grace, which he made to abound toward us in all wisdom and prudence.",
     "Luke 6:37 Do not judge, and you will not be judged. Do not condemn, and you will not be condemned. Forgive, and you will be forgiven.",
     "1 Peter 3:9 Do not repay evil for evil or reviling for reviling, but on the contrary, bless, for to this you were called, that you may obtain a blessing.",
     " Romans 6:23 For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
     "John 3:16-17 For God so loved the world that he gave his only son, that whoever believes in him should not perish but have eternal life. For God did not send his son into the world to condemn the world, but in order that the world might be saved through him.",
     "Matthew 18:21-22 Then Peter came to Jesus and asked, “Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?” Jesus answered, “I tell you, not seven times, but seventy-seven times.”",
     "Joel 2:13 Rend your heart and not your garments. Return to the Lord your God, for he is gracious and compassionate, slow to anger and abounding in love, and he relents from sending calamity.",
     "Psalm 65:3 Though we are overwhelmed by our sins, you forgive them all.",
     "Luke 7:47 I tell you, her sins — and they are many — have been forgiven, so she has shown me much love. But a person who is forgiven little shows only little love.",
     "Psalm 103:11-12 For his unfailing love toward those who fear him is as great as the height of the heavens above the earth. He has removed our sins as far from us as the east is from the west.",
     "Colossians 1:13-14 He has delivered us from the domain of darkness and transferred us to the kingdom of his beloved son, in whom we have redemption, the forgiveness of sins.",
     "Luke 23:34 And Jesus said, “Father, forgive them, for they know not what they do.” And they cast lots to divide his garments.",
     "Matthew 12:31 And so I tell you, every kind of sin and slander can be forgiven, but blasphemy against the spirit will not be forgiven.",
     "Acts 3:19 Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord.",
     "Ephesians 4:31 Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice.",
     "Matthew 6:12 And forgive us our debts, as we also have forgiven our debtors.",
     "Proverbs 10:12 Hatred stirs old quarrels, but love overlooks insults.",
     "1 John 1:9 If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
     "Matthew 6:15 But if you do not forgive others their sins, your father will not forgive your sins.",
     "2 Corinthians 5:17 Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
     "Psalm 86:5 You, Lord, are forgiving and good, abounding in love to all who call to you.",
     "Colossians 3:12-13 Put on then, as God's chosen ones, holy and beloved, compassionate hearts, kindness, humility, meekness, and patience, bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.",
     "Proverbs 18:24 A man of many companions may come to ruin, but there is a friend who sticks closer than a brother.",
     "Proverbs 27:17 Iron sharpens iron, and one man sharpens another.",
     "John 15:13 Greater love has no one than this, that someone lay down his life for his friends.",
     "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity.",
     "Ecclesiastes 4:9-10 Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!",
     "James 4:8 Draw near to God, and he will draw near to you. Cleanse your hands, you sinners, and purify your hearts, you double-minded.",
     "1 Thessalonians 5:11 Therefore encourage one another and build one another up, just as you are doing.",
     "Proverbs 27:9 Oil and perfume make the heart glad, and the sweetness of a friend comes from his earnest counsel.",
     "Romans 12:10 Love one another with brotherly affection. Outdo one another in showing honor.",
     "1 Corinthians 15:33 Do not be deceived: “Bad company ruins good morals.”",
     "Proverbs 13:20 Whoever walks with the wise becomes wise, but the companion of fools will suffer harm.",
     "Proverbs 22:24-25 Make no friendship with a man given to anger, nor go with a wrathful man, lest you learn his ways and entangle yourself in a snare.",
     "Ecclesiastes 4:12 And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken.",
     "John 13:34-35 A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another.",
     "Proverbs 27:6 Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
     "1 Peter 4:8 Above all, keep loving one another earnestly, since love covers a multitude of sins.",
     "1 John 4:7-8 Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God. Anyone who does not love does not know God, because God is love.",
     "Proverbs 12:26 One who is righteous is a guide to his neighbor, but the way of the wicked leads them astray.",
     "Proverbs 27:17 Iron sharpens iron, and one man sharpens another.",
     "Proverbs 27:5-6 Better is open rebuke than hidden love. Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
     "1 Corinthians 13:4-7 Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.",
     "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity.",
     "Ecclesiastes 4:9-12 Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up! Again, if two lie together, they keep warm, but how can one keep warm alone? And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken.",
     "Proverbs 18:24 A man of many companions may come to ruin, but there is a friend who sticks closer than a brother.",
     "Proverbs 27:17 Iron sharpens iron, and one man sharpens another.",
     "John 15:13 Greater love has no one than this, that someone lay down his life for his friends.",
     "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity.",
     "Ecclesiastes 4:9-10 Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!",
     "James 4:8 Draw near to God, and he will draw near to you. Cleanse your hands, you sinners, and purify your hearts, you double-minded.",
     "1 Thessalonians 5:11 Therefore encourage one another and build one another up, just as you are doing.",
     "Proverbs 27:9 Oil and perfume make the heart glad, and the sweetness of a friend comes from his earnest counsel.",
     "Romans 12:10 Love one another with brotherly affection. Outdo one another in showing honor.",
     "1 Corinthians 15:33 Do not be deceived: “Bad company ruins good morals.”",
     "Proverbs 13:20 Whoever walks with the wise becomes wise, but the companion of fools will suffer harm.",
     "Proverbs 22:24-25 Make no friendship with a man given to anger, nor go with a wrathful man, lest you learn his ways and entangle yourself in a snare.",
     "Ecclesiastes 4:12 And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken.",
     "John 13:34-35 A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another.",
     "Proverbs 27:6 Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
     "1 Peter 4:8 Above all, keep loving one another earnestly, since love covers a multitude of sins.",
     "1 John 4:7-8 Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God. Anyone who does not love does not know God, because God is love.",
     "Proverbs 12:26 One who is righteous is a guide to his neighbor, but the way of the wicked leads them astray.",
     "Proverbs 27:17 Iron sharpens iron, and one man sharpens another.",
     "Proverbs 27:5-6 Better is open rebuke than hidden love. Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
     "1 Corinthians 13:4-7 Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.",
     "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity.",
     "Ecclesiastes 4:9-12 Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up! Again, if two lie together, they keep warm, but how can one keep warm alone? And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken.",
     "Acts 20:35 It is more blessed to give than to receive.",
    "Proverbs 11:25 A generous person will prosper; whoever refreshes others will be refreshed.",
    "Luke 6:38 Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.",
    "Acts 20:35 It is more blessed to give than to receive.",
    "Proverbs 11:25 A generous person will prosper; whoever refreshes others will be refreshed.",
    "Luke 6:38 Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.",
    "2 Corinthians 9:7 Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
    "Proverbs 19:17 Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done.",
    "Matthew 6:3-4 But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you.",
    "Malachi 3:10 Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.",
    "1 Timothy 6:18-19 Command them to do good, to be rich in good deeds, and to be generous and willing to share. In this way they will lay up treasure for themselves as a firm foundation for the coming age, so that they may take hold of the life that is truly life.",
    "Proverbs 22:9 The generous will themselves be blessed, for they share their food with the poor.",
    "Hebrews 13:16 And do not forget to do good and to share with others, for with such sacrifices God is pleased.",
    "2 Corinthians 9:10 Now he who supplies seed to the sower and bread for food will also supply and increase your store of seed and will enlarge the harvest of your righteousness.",
    "Proverbs 28:27 Those who give to the poor will lack nothing, but those who close their eyes to them receive many curses.",
    "Deuteronomy 15:10 Give generously to them and do so without a grudging heart; then because of this the Lord your God will bless you in all your work and in everything you put your hand to.",
    "Proverbs 3:27 Do not withhold good from those to whom it is due, when it is in your power to act.",
    "Luke 6:30 Give to everyone who asks you, and if anyone takes what belongs to you, do not demand it back.",
    "Romans 12:8 if it is to encourage, then give encouragement; if it is giving, then give generously; if it is to lead, do it diligently; if it is to show mercy, do it cheerfully.",
    "Proverbs 28:25 A greedy man stirs up strife, but the one who trusts in the Lord will be enriched.",
    "Mark 12:41-44 Jesus sat down opposite the place where the offerings were put and watched the crowd putting their money into the temple treasury. Many rich people threw in large amounts. But a poor widow came and put in two very small copper coins, worth only a few cents. Calling his disciples to him, Jesus said, “Truly I tell you, this poor widow has put more into the treasury than all the others. They all gave out of their wealth; but she, out of her poverty, put in everything—all she had to live on.",
    "Acts 2:44-45 All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need.",
    "Romans 13:7 Give to everyone what you owe them: If you owe taxes, pay taxes; if revenue, then revenue; if respect, then respect; if honor, then honor.",
    "2 Corinthians 9:11 You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.",
    "Matthew 5:42 Give to the one who asks you, and do not turn away from the one who wants to borrow from you.",
    "Proverbs 11:24-25 One person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed.",
    "Galatians 6:9-10 Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.",
    "Psalm 34:18 The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    "Psalm 30:5 ...weeping may stay for the night, but rejoicing comes in the morning.",
    "Matthew 5:4 Blessed are those who mourn, for they will be comforted.",
    "Psalm 34:18 The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    "Psalm 30:5 ...weeping may stay for the night, but rejoicing comes in the morning.",
    "Matthew 5:4 Blessed are those who mourn, for they will be comforted.",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "John 14:27 Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    "2 Corinthians 1:3-4 Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
    "Psalm 42:11 Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
    "Romans 8:18 I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
    "Psalm 147:3 He heals the brokenhearted and binds up their wounds.",
    "2 Corinthians 7:10 Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death.",
    "John 16:33 I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    "Psalm 40:1-3 I waited patiently for the Lord; he turned to me and heard my cry. He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand. He put a new song in my mouth, a hymn of praise to our God. Many will see and fear the Lord and put their trust in him.",
    "Lamentations 3:31-33 For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone.",
    "Psalm 73:26 My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
    "2 Corinthians 4:17-18 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.",
    "Psalm 22:24 For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.",
    "Psalm 147:3 He heals the brokenhearted and binds up their wounds.",
    "Psalm 30:11-12 You turned my wailing into dancing; you removed my sackcloth and clothed me with joy, that my heart may sing your praises and not be silent. Lord my God, I will praise you forever.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Romans 15:13 May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    "Psalm 126:5 Those who sow with tears will reap with songs of joy.",
    "Psalm 56:8 You keep track of all my sorrows. You have collected all my tears in your bottle. You have recorded each one in your book.",
    "Psalm 55:22 Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
    "Psalm 9:9 The Lord is a refuge for the oppressed, a stronghold in times of trouble.",
    "Isaiah 53:4-5 Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    "Romans 8:28 And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    "1 Peter 5:7 Cast all your anxiety on him because he cares for you.",
    "James 1:2-4 Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    "Romans 8:18 I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
    "2 Corinthians 4:17 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.",
    "James 1:2-4 Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    "Romans 8:18 I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
    "2 Corinthians 4:17 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Psalm 34:17-19 The righteous cry out, and the Lord hears them; he delivers them from all their troubles. The Lord is close to the brokenhearted and saves those who are crushed in spirit. The righteous person may have many troubles, but the Lord delivers him from them all.",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "John 16:33 I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    "Romans 5:3-5 Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not put us to shame, because God’s love has been poured out into our hearts through the Holy Spirit, who has been given to us.",
    "Psalm 119:71 It was good for me to be afflicted so that I might learn your decrees.",
    "2 Corinthians 12:9-10 But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. That is why, for Christ’s sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "1 Peter 5:10 And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.",
    "Psalm 27:1 The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    "Psalm 55:22 Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
    "Isaiah 40:31 but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    "2 Thessalonians 3:3 But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
    "Romans 12:12 Be joyful in hope, patient in affliction, faithful in prayer.",
    "Psalm 34:19 The righteous person may have many troubles, but the Lord delivers him from them all.",
    "Psalm 138:7 Though I walk in the midst of trouble, you preserve my life. You stretch out your hand against the anger of my foes; with your right hand you save me.",
    "Psalm 62:8 Trust in him at all times, you people; pour out your hearts to him, for God is our refuge.",
    "Psalm 23:4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Romans 15:13 May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    "Isaiah 41:13 For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
    "2 Corinthians 4:8-9 We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed.",
    "Psalm 9:9 The Lord is a refuge for the oppressed, a stronghold in times of trouble.",
    "John 14:27 Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    "Psalm 55:22 Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
    "Psalm 34:17 When the righteous cry for help, the Lord hears and delivers them out of all their troubles.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.",
    "Psalm 34:4 I sought the Lord, and he answered me and delivered me from all my fears.",
    "Romans 5:3-4 Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope.",
    "James 1:12 Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.",
    "Romans 8:28 And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    "Isaiah 40:29 He gives power to the faint, and to him who has no might he increases strength.",
    "Philippians 4:6-7 do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    "Psalm 46:1-3 God is our refuge and strength, a very present help in trouble. Therefore we will not fear though the earth gives way, though the mountains be moved into the heart of the sea, though its waters roar and foam, though the mountains tremble at its swelling.",
    "1 Peter 5:7 casting all your anxieties on him, because he cares for you.",
    "John 16:33 I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
    "Psalm 55:22 Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
    "2 Corinthians 4:8-10 We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed; always carrying in the body the death of Jesus, so that the life of Jesus may also be manifested in our bodies.",
    "Psalm 145:18 The Lord is near to all who call on him, to all who call on him in truth.",
    "John 14:1 Let not your hearts be troubled. Believe in God; believe also in me.",
    "Psalm 119:50 This is my comfort in my affliction, that your promise gives me life.",
    "Psalm 50:15 and call upon me in the day of trouble; I will deliver you, and you shall glorify me.",
    "Romans 8:35-39 Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword? As it is written, “For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.” No, in all these things we are more than conquerors through him who loved us. For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "Psalm 91:1-16 He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, “My refuge and my fortress, my God, in whom I trust.” For he will deliver you from the snare of the fowler and from the deadly pestilence. He will cover you with his pinions, and under his wings you will find refuge; his faithfulness is a shield and buckler. You will not fear the terror of the night, nor the arrow that flies by day, ...",
    "Psalm 119:71 It is good for me that I was afflicted, that I might learn your statutes.",
    "Romans 15:4 For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope.",
    "Psalm 55:22 Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
    "Philippians 4:13 I can do all things through him who strengthens me.",
    "Psalm 91:1 He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.",
    "2 Corinthians 12:9 But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.",
    "Isaiah 26:3 You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
    "Psalm 34:19 Many are the afflictions of the righteous, but the Lord delivers him out of them all.",
    "Psalm 23:4 Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 37:39 The salvation of the righteous is from the Lord; he is their stronghold in the time of trouble.",
    "Romans 8:28-30 And we know that for those who love God all things work together for good, for those who are called according to his purpose. For those whom he foreknew he also predestined to be conformed to the image of his Son, in order that he might be the firstborn among many brothers. And those whom he predestined he also called, and those whom he called he also justified, and those whom he justified he also glorified.",
    "Isaiah 43:1-3 But now thus says the Lord, he who created you, O Jacob, he who formed you, O Israel: “Fear not, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you. For I am the Lord your God, the Holy One of Israel, your Savior. I give Egypt as your ransom, Cush and Seba in exchange for you.",
    "Romans 8:31 What then shall we say to these things? If God is for us, who can be against us?",
    "Philippians 4:6-8 do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.",
    "Romans 8:38-39 For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "Isaiah 40:29-31 He gives power to the faint, and to him who has no might he increases strength. Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    "Hebrews 4:16 Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.",
    "John 14:27 Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
    "Psalm 121:1-8 I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. He will not let your foot be moved; he who keeps you will not slumber. Behold, he who keeps Israel will neither slumber nor sleep. The Lord is your keeper; the Lord is your shade on your right hand. ...",
    "Psalm 119:71-72 It is good for me that I was afflicted, that I might learn your statutes. The law of your mouth is better to me than thousands of gold and silver pieces.",
    "Psalm 145:18-19 The Lord is near to all who call on him, to all who call on him in truth. He fulfills the desire of those who fear him; he also hears their cry and saves them.",
    "1 Corinthians 10:13 No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.",
    "2 Corinthians 4:8-9 We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed;",
    "Philippians 4:6-7 do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    "Philippians 4:19 And my God will supply every need of yours according to his riches in glory in Christ Jesus.",
    "Romans 8:26 Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.",
    "1 Peter 4:12 Beloved, do not be surprised at the fiery trial when it comes upon you to test you, as though something strange were happening to you.",
    "Psalm 18:2 The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold.",
    "Psalm 34:17 When the righteous cry for help, the Lord hears and delivers them out of all their troubles.",
    "Psalm 34:18 The Lord is near to the brokenhearted and saves the crushed in spirit.",
    "Psalm 37:39 But the salvation of the righteous is from the Lord; he is their stronghold in the time of trouble.",
    "Psalm 42:11 Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.",
    "Psalm 46:1 To the choirmaster. Of the Sons of Korah. According to Alamoth. A Song. God is our refuge and strength, a very present help in trouble.",
    "Psalm 55:22 Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.",
    "Psalm 119:50 This is my comfort in my affliction, that your promise gives me life.",
    "Isaiah 12:2 “Behold, God is my salvation; I will trust, and will not be afraid; for the Lord God is my strength and my song, and he has become my salvation.”",
    "Isaiah 26:3 You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
    "Isaiah 41:10 Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    "Isaiah 41:13 For I, the Lord your God, hold your right hand; it is I who say to you, “Fear not, I am the one who helps you.”",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.",
    "Isaiah 43:5 Fear not, for I am with you; I will bring your offspring from the east, and from the west I will gather you.",
    "Isaiah 43:18-19 Remember not the former things, nor consider the things of old. Behold, I am doing a new thing; now it springs forth, do you not perceive it? I will make a way in the wilderness and rivers in the desert.",
    "Isaiah 49:15-16 “Can a woman forget her nursing child, that she should have no compassion on the son of her womb? Even these may forget, yet I will not forget you. Behold, I have engraved you on the palms of my hands; your walls are continually before me.”",
    "Isaiah 50:7 But the Lord God helps me; therefore I have not been disgraced; therefore I have set my face like a flint, and I know that I shall not be put to shame.",
    "Isaiah 51:12-13 “I, I am he who comforts you; who are you that you are afraid of man who dies, of the son of man who is made like grass, and have forgotten the Lord, your Maker, who stretched out the heavens and laid the foundations of the earth, and you fear continually all the day because of the wrath of the oppressor, when he sets himself to destroy? And where is the wrath of the oppressor?”",
    "Isaiah 54:17 no weapon that is fashioned against you shall succeed, and you shall confute every tongue that rises against you in judgment. This is the heritage of the servants of the Lord and their vindication from me, declares the Lord.”",
    "Jeremiah 29:11 For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    "Jeremiah 32:17 ‘Ah, Lord God! It is you who have made the heavens and the earth by your great power and by your outstretched arm! Nothing is too hard for you.",
    "Jeremiah 33:3 Call to me and I will answer you, and will tell you great and hidden things that you have not known.",
    "Lamentations 3:22-23 The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    "Lamentations 3:31-33 For the Lord will not cast off forever, but, though he cause grief, he will have compassion according to the abundance of his steadfast love; for he does not afflict from his heart or grieve the children of men.",
    "Lamentations 3:55-56 “I called on your name, O Lord, from the depths of the pit; you heard my plea, ‘Do not close your ear to my cry for help!’",
    "Matthew 6:34 “Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.",
    "Matthew 11:28-30 Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.”",
    "John 14:27 Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
    "John 16:33 I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.”",
    "Romans 5:1-5 Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ. Through him we have also obtained access by faith into this grace in which we stand, and we rejoice in hope of the glory of God. Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God's love has been poured into our hearts through the Holy Spirit who has been given to us.",
    "Romans 8:18 For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.",
    "Romans 8:28 And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    "Romans 8:31 What then shall we say to these things? If God is for us, who can be against us?",
    "Romans 8:35-39 Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword? As it is written, “For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.” No, in all these things we are more than conquerors through him who loved us. For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    "2 Corinthians 1:3-4 Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.",
    "2 Corinthians 4:8-10 We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed; always carrying in the body the death of Jesus, so that the life of Jesus may also be manifested in our bodies.",
    "2 Corinthians 4:16-18 So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.",
    "2 Corinthians 12:9-10 But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me. For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities. For when I am weak, then I am strong.",
    "Ephesians 3:20-21 Now to him who is able to do far more abundantly than all that we ask or think, according to the power at work within us, to him be glory in the church and in Christ Jesus throughout all generations, forever and ever. Amen.",
    "Philippians 4:6-7 do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    "Philippians 4:13 I can do all things through him who strengthens me.",
    "Philippians 4:19 And my God will supply every need of yours according to his riches in glory in Christ Jesus.",
    "Hebrews 4:16 Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.",
    "Hebrews 12:1-2 Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.",
    "James 1:2-4 Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",
    "1 Peter 5:6-7 Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxieties on him, because he cares for you.",
    "1 Peter 5:10 And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, confirm, strengthen, and establish you.",
    "1 John 1:9 If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
    "1 John 4:4 Little children, you are from God and have overcome them, for he who is in you is greater than he who is in the world.",
    "Revelation 21:4 He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.”",
    "Galatians 5:13 You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.",
    "1 Peter 4:10 Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.",
    "Mark 10:45 For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    "Matthew 23:11 The greatest among you will be your servant.",
    "Mark 9:35 Sitting down, Jesus called the Twelve and said, 'Anyone who wants to be first must be the very last, and the servant of all.'",
    "John 13:14-15 Now that I, your Lord and Teacher, have washed your feet, you also should wash one another's feet. I have set you an example that you should do as I have done for you.",
    "Galatians 6:2 Carry each other’s burdens, and in this way you will fulfill the law of Christ.",
    "Philippians 2:3-4 Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.",
    "1 Timothy 4:12 Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
    "1 Peter 4:11 If anyone serves, they should do so with the strength God provides, so that in all things God may be praised through Jesus Christ. To him be the glory and the power for ever and ever. Amen.",
    "Colossians 3:23-24 Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    "Hebrews 6:10 God is not unjust; he will not forget your work and the love you have shown him as you have helped his people and continue to help them.",
    "1 Peter 5:2-3 Be shepherds of God’s flock that is under your care, watching over them—not because you must, but because you are willing, as God wants you to be; not pursuing dishonest gain, but eager to serve; not lording it over those entrusted to you, but being examples to the flock.",
    "Ephesians 2:10 For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
    "Romans 12:11 Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.",
    "Colossians 3:17 And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
    "1 Corinthians 15:58 Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
    "Luke 6:38 Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.",
    "Romans 12:1 Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.",
    "Hebrews 13:16 And do not forget to do good and to share with others, for with such sacrifices God is pleased.",
    "1 Peter 4:10 Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.",
    "Mark 10:45 For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    "Matthew 25:40 The King will reply, ‘Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.’",
    "Galatians 5:13 You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.",
    "Philippians 2:3-4 Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.",
    "Matthew 20:28 Just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    "Romans 12:10 Be devoted to one another in love. Honor one another above yourselves.",
    "Ephesians 6:7 Serve wholeheartedly, as if you were serving the Lord, not people.",
    "Colossians 3:23-24 Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    "1 Corinthians 15:58 Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
    "Galatians 6:9 Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
    "John 12:26 Whoever serves me must follow me; and where I am, my servant also will be. My Father will honor the one who serves me.",
    "1 Timothy 4:12 Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
    "Luke 6:38 Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.",
    "Matthew 6:20 But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal.",
    "1 Corinthians 3:14 If what has been built survives, the builder will receive a reward.",
    "Colossians 3:23-24 Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    "Matthew 5:12 Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you.",
    "Hebrews 11:6 And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.",
    "Revelation 22:12 Look, I am coming soon! My reward is with me, and I will give to each person according to what they have done.",
    "Luke 6:23 Rejoice in that day and leap for joy, because great is your reward in heaven. For that is how their ancestors treated the prophets.",
    "1 Corinthians 9:24-25 Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize. Everyone who competes in the games goes into strict training. They do it to get a crown that will not last, but we do it to get a crown that will last forever.",
    "2 John 1:8 Watch out that you do not lose what we have worked for, but that you may be rewarded fully.",
    "Psalm 19:11 Moreover, by them is your servant warned; in keeping them there is great reward.",
    "Matthew 10:41-42 Whoever welcomes a prophet as a prophet will receive a prophet’s reward, and whoever welcomes a righteous person as a righteous person will receive a righteous person’s reward. And if anyone gives even a cup of cold water to one of these little ones who is my disciple, truly I tell you, that person will certainly not lose their reward.",
    "Proverbs 25:21-22 If your enemy is hungry, give him food to eat; if he is thirsty, give him water to drink. In doing this, you will heap burning coals on his head, and the Lord will reward you.",
    "Matthew 16:27 For the Son of Man is going to come in his Father’s glory with his angels, and then he will reward each person according to what they have done.",
    "Hebrews 10:35 So do not throw away your confidence; it will be richly rewarded.",
    "Matthew 6:4 so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you.",
    "Luke 14:13-14 But when you give a banquet, invite the poor, the crippled, the lame, the blind, and you will be blessed. Although they cannot repay you, you will be repaid at the resurrection of the righteous.",
    "Colossians 3:24 since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    "Hebrews 11:26 He regarded disgrace for the sake of Christ as of greater value than the treasures of Egypt, because he was looking ahead to his reward.",
    "Matthew 6:6 But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you.",
    "Luke 6:35 But love your enemies, do good to them, and lend to them without expecting to get anything back. Then your reward will be great, and you will be children of the Most High, because he is kind to the ungrateful and wicked.",
    "2 Timothy 4:8 Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day—and not only to me, but also to all who have longed for his appearing.",
    "Revelation 2:10 Do not be afraid of what you are about to suffer. I tell you, the devil will put some of you in prison to test you, and you will suffer persecution for ten days. Be faithful, even to the point of death, and I will give you life as your victor’s crown.",
    "1 Peter 5:4 And when the Chief Shepherd appears, you will receive the crown of glory that will never fade away.",
    "Matthew 5:46 For if you love those who love you, what reward do you have? Do not even the tax collectors do the same?",
    "Luke 6:35 But love your enemies, and do good, and lend, expecting nothing in return, and your reward will be great, and you will be sons of the Most High, for he is kind to the ungrateful and the evil.",
    "Colossians 3:23-24 Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.",
    "2 John 1:8 Watch yourselves, so that you may not lose what we have worked for, but may win a full reward.",
    "Hebrews 11:6 And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.",
    "Matthew 6:1-4 Beware of practicing your righteousness before other people in order to be seen by them, for then you will have no reward from your Father who is in heaven. Thus, when you give to the needy, sound no trumpet before you, as the hypocrites do in the synagogues and in the streets, that they may be praised by others. Truly, I say to you, they have received their reward. But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. And your Father who sees in secret will reward you.",
    "Romans 3:24 and all are justified freely by his grace through the redemption that came by Christ Jesus.",
    "Ephesians 2:8-9 For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
    "2 Corinthians 12:9 But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.",
    "Romans 5:20-21 But where sin increased, grace increased all the more, so that, just as sin reigned in death, so also grace might reign through righteousness to bring eternal life through Jesus Christ our Lord.",
    "Titus 2:11 For the grace of God has appeared that offers salvation to all people.",
    "Hebrews 4:16 Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
    "James 4:6 But he gives us more grace. That is why Scripture says: 'God opposes the proud but shows favor to the humble.'",
    "1 Peter 5:10 And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.",
    "Ephesians 1:7 In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace.",
    "Ephesians 2:5 made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.",
    "Ephesians 2:8-9 For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
    "2 Timothy 1:9 He has saved us and called us to a holy life—not because of anything we have done but because of his own purpose and grace. This grace was given us in Christ Jesus before the beginning of time.",
    "Titus 2:11 For the grace of God has appeared that offers salvation to all people.",
    "Romans 5:20-21 But where sin increased, grace increased all the more, so that, just as sin reigned in death, so also grace might reign through righteousness to bring eternal life through Jesus Christ our Lord.",
    "Hebrews 4:16 Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
    "James 4:6 But he gives us more grace. That is why Scripture says: 'God opposes the proud but shows favor to the humble.'",
    "1 Peter 5:10 And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.",
    "2 Corinthians 9:8 And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.",
    "Ephesians 2:4-5 But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.",
    "John 1:16 Out of his fullness we have all received grace in place of grace already given.",
    "Titus 2:11 For the grace of God has appeared that offers salvation to all people.",
    "Ephesians 1:7-8 In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace that he lavished on us. With all wisdom and understanding.",
    "2 Timothy 1:9 He has saved us and called us to a holy life—not because of anything we have done but because of his own purpose and grace. This grace was given us in Christ Jesus before the beginning of time.",
    "Hebrews 12:15 See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.",
    "1 Peter 1:13 Therefore, with minds that are alert and fully sober, set your hope on the grace to be brought to you when Jesus Christ is revealed at his coming.",
    "2 Peter 3:18 But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen.",
    "Romans 6:14 For sin shall no longer be your master, because you are not under the law, but under grace.",
    "Romans 11:6 And if by grace, then it cannot be based on works; if it were, grace would no longer be grace.",
    "James 1:17 Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
    "Joshua 1:9 Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    "Psalm 27:1 The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Deuteronomy 31:6 Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
    "1 Corinthians 16:13 Be on your guard; stand firm in the faith; be courageous; be strong.",
    "Psalm 56:3-4 When I am afraid, I put my trust in you. In God, whose word I praise— in God I trust and am not afraid. What can mere mortals do to me?",
    "Isaiah 43:1-2 Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "2 Timothy 1:7 For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    "Psalm 23:4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 118:6 The Lord is with me; I will not be afraid. What can mere mortals do to me?",
    "Romans 8:31 What, then, shall we say in response to these things? If God is for us, who can be against us?",
    "Joshua 1:7 Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go.",
    "Psalm 112:7 They will have no fear of bad news; their hearts are steadfast, trusting in the Lord.",
    "Isaiah 54:17 No weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
    "1 Chronicles 28:20 David also said to Solomon his son, 'Be strong and courageous, and do the work. Do not be afraid or discouraged, for the Lord God, my God, is with you. He will not fail you or forsake you until all the work for the service of the temple of the Lord is finished.'",
    "Psalm 31:24 Be strong and take heart, all you who hope in the Lord.",
    "Psalm 34:4 I sought the Lord, and he answered me; he delivered me from all my fears.",
    "Psalm 112:7 They will have no fear of bad news; their hearts are steadfast, trusting in the Lord.",
    "Isaiah 12:2 Surely God is my salvation; I will trust and not be afraid. The Lord, the Lord himself, is my strength and my defense; he has become my salvation.",
    "Isaiah 35:4 say to those with fearful hearts, 'Be strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.'",
    "Isaiah 40:29-31 He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    "Isaiah 41:13 For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
    "Isaiah 54:4 'Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated. You will forget the shame of your youth and remember no more the reproach of your widowhood.'",
    "Daniel 10:19 'Do not be afraid, you who are highly esteemed,' he said. 'Peace! Be strong now; be strong.' When he spoke to me, I was strengthened and said, 'Speak, my lord, since you have given me strength.'",
    "1 Corinthians 16:13 Be on your guard; stand firm in the faith; be courageous; be strong.",
    "2 Timothy 1:7 For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    "Hebrews 13:6 So we say with confidence, 'The Lord is my helper; I will not be afraid. What can mere mortals do to me?'",
    "Deuteronomy 31:6 Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
    "Joshua 1:7 Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go.",
    "Joshua 1:9 Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    "1 Chronicles 28:20 David also said to Solomon his son, 'Be strong and courageous, and do the work. Do not be afraid or discouraged, for the Lord God, my God, is with you. He will not fail you or forsake you until all the work for the service of the temple of the Lord is finished.'",
    "Psalm 27:1 The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    "Psalm 31:24 Be strong and take heart, all you who hope in the Lord.",
    "Psalm 56:3-4 When I am afraid, I put my trust in you. In God, whose word I praise— in God I trust and am not afraid. What can mere mortals do to me?",
    "Psalm 112:7 They will have no fear of bad news; their hearts are steadfast, trusting in the Lord.",
    "Isaiah 12:2 Surely God is my salvation; I will trust and not be afraid. The Lord, the Lord himself, is my strength and my defense; he has become my salvation.",
    "Isaiah 35:4 say to those with fearful hearts, 'Be strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.'",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Isaiah 41:13 For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
    "Isaiah 43:1-2 Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Daniel 10:19 'Do not be afraid, you who are highly esteemed,' he said. 'Peace! Be strong now; be strong.' When he spoke to me, I was strengthened and said, 'Speak, my lord, since you have given me strength.'",
    "Matthew 10:28 Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.",
    "Mark 6:50 Immediately he spoke to them and said, 'Take courage! It is I. Don’t be afraid.'",
    "John 16:33 'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.'",
    "Acts 18:9-10 One night the Lord spoke to Paul in a vision: 'Do not be afraid; keep on speaking, do not be silent. For I am with you, and no one is going to attack and harm you, because I have many people in this city.'",
    "Romans 8:31 What, then, shall we say in response to these things? If God is for us, who can be against us?",
    "1 Corinthians 16:13 Be on your guard; stand firm in the faith; be courageous; be strong.",
    "2 Timothy 1:7 For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    "Hebrews 13:6 So we say with confidence, 'The Lord is my helper; I will not be afraid. What can mere mortals do to me?'",
    "1 Thessalonians 5:18 give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
    "Psalm 107:1 Give thanks to the Lord, for he is good; his love endures forever.",
    "Colossians 3:15 Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
    "1 Chronicles 16:34 Give thanks to the Lord, for he is good; his love endures forever.",
    "Psalm 100:4 Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
    "Ephesians 5:20 always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.",
    "Philippians 4:6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    "Colossians 4:2 Devote yourselves to prayer, being watchful and thankful.",
    "1 Thessalonians 5:16-18 Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
    "Hebrews 12:28 Therefore, since we are receiving a kingdom that cannot be shaken, let us be thankful, and so worship God acceptably with reverence and awe.",
    "James 1:17 Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
    "Revelation 7:12 saying: 'Amen! Praise and glory and wisdom and thanks and honor and power and strength be to our God for ever and ever. Amen!'",
    "Psalm 118:1 Give thanks to the Lord, for he is good; his love endures forever.",
    "Psalm 95:2 Let us come before him with thanksgiving and extol him with music and song.",
    "1 Corinthians 1:4 I always thank my God for you because of his grace given you in Christ Jesus.",
    "2 Corinthians 9:11 You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.",
    "2 Corinthians 2:14 But thanks be to God, who always leads us as captives in Christ’s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere.",
    "Colossians 2:6-7 So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness.",
    "Colossians 3:17 And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
    "Colossians 4:2 Devote yourselves to prayer, being watchful and thankful.",
    "1 Timothy 4:4 For everything God created is good, and nothing is to be rejected if it is received with thanksgiving,",
    "Hebrews 13:15 Through Jesus, therefore, let us continually offer to God a sacrifice of praise—the fruit of lips that openly profess his name.",
    "Revelation 11:17 saying: 'We give thanks to you, Lord God Almighty, the One who is and who was, because you have taken your great power and have begun to reign.'",
    "1 Thessalonians 1:2 We always thank God for all of you and continually mention you in our prayers.",
    "Psalm 136:1 Give thanks to the Lord, for he is good. His love endures forever.",
    "Psalm 95:2 Let us come before him with thanksgiving and extol him with music and song.",
    "Ephesians 1:16 I have not stopped giving thanks for you, remembering you in my prayers.",
    "Colossians 3:15 Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
    "Colossians 4:2 Devote yourselves to prayer, being watchful and thankful.",
    "1 Timothy 2:1 I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people—",
    "Psalm 106:1 Praise the Lord. Give thanks to the Lord, for he is good; his love endures forever.",
    "Philippians 1:3 I thank my God every time I remember you.",
    "Colossians 1:3 We always thank God, the Father of our Lord Jesus Christ, when we pray for you,",
    "1 Thessalonians 5:18 give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
    "2 Corinthians 9:11 You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.",
    "Hebrews 13:15 Through Jesus, therefore, let us continually offer to God a sacrifice of praise—the fruit of lips that openly profess his name.",
    "Colossians 3:17 And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
    "Philippians 4:6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    "1 Corinthians 1:4 I always thank my God for you because of his grace given you in Christ Jesus.",
    "Ephesians 5:20 always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.",
    "1 Thessalonians 3:9 How can we thank God enough for you in return for all the joy we have in the presence of our God because of you?",
    "Psalm 118:1 Give thanks to the Lord, for he is good; his love endures forever.",
    "Psalm 91:11 For he will command his angels concerning you to guard you in all your ways.",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Psalm 121:7-8 The Lord will keep you from all harm— he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
    "Psalm 18:2 The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
    "Proverbs 18:10 The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    "Psalm 91:4 He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
    "Psalm 34:7 The angel of the Lord encamps around those who fear him, and he delivers them.",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "Psalm 27:1 The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?",
    "Isaiah 54:17 no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
    "Psalm 91:1-2 Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
    "Psalm 34:17 The righteous cry out, and the Lord hears them; he delivers them from all their troubles.",
    "Isaiah 41:10 So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "2 Thessalonians 3:3 But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
    "Psalm 23:4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 18:30 As for God, his way is perfect: The Lord’s word is flawless; he shields all who take refuge in him.",
    "Psalm 46:7 The Lord Almighty is with us; the God of Jacob is our fortress.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Psalm 91:9-11 If you say, 'The Lord is my refuge,' and you make the Most High your dwelling, no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways;",
    "Psalm 121:3-4 He will not let your foot slip— he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep.",
    "Psalm 91:14 'Because he loves me,' says the Lord, 'I will rescue him; I will protect him, for he acknowledges my name.'",
    "Psalm 91:15 He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.",
    "Psalm 34:7 The angel of the Lord encamps around those who fear him, and he delivers them.",
    "Psalm 121:7-8 The Lord will keep you from all harm— he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
    "Proverbs 18:10 The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    "Psalm 18:2 The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
    "Psalm 91:4 He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
    "Psalm 91:1-2 Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
    "Psalm 27:1 The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?",
    "Isaiah 54:17 no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
    "Psalm 91:9-11 If you say, 'The Lord is my refuge,' and you make the Most High your dwelling, no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways;",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "Psalm 121:3-4 He will not let your foot slip— he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Psalm 91:14 'Because he loves me,' says the Lord, 'I will rescue him; I will protect him, for he acknowledges my name.'",
    "Psalm 91:15 He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.",
    "2 Thessalonians 3:3 But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
    "Psalm 46:7 The Lord Almighty is with us; the God of Jacob is our fortress.",
    "Psalm 18:30 As for God, his way is perfect: The Lord’s word is flawless; he shields all who take refuge in him.",
    "Psalm 23:4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 91:2 I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
    "Psalm 121:5-6 The Lord watches over you— the Lord is your shade at your right hand; the sun will not harm you by day, nor the moon by night.",
    "Psalm 121:8 the Lord will watch over your coming and going both now and forevermore.",
    "Isaiah 26:3 You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
    "Isaiah 54:17 no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
    "2 Thessalonians 3:3 But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
    "Psalm 18:2 The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
    "Proverbs 18:10 The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    "Psalm 121:7-8 The Lord will keep you from all harm— he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
    "Psalm 46:1 God is our refuge and strength, an ever-present help in trouble.",
    "Psalm 91:9-11 If you say, 'The Lord is my refuge,' and you make the Most High your dwelling, no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways;",
    "Psalm 46:7 The Lord Almighty is with us; the God of Jacob is our fortress.",
    "Psalm 91:14 'Because he loves me,' says the Lord, 'I will rescue him; I will protect him, for he acknowledges my name.'",
    "Psalm 91:15 He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.",
    "Proverbs 3:5-6 Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    "Psalm 62:8 Trust in him at all times, you people; pour out your hearts to him, for God is our refuge.",
    "Isaiah 43:2 When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
    "Psalm 34:7 The angel of the Lord encamps around those who fear him, and he delivers them.",
    "Psalm 91:4 He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
    "Psalm 91:1-2 Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
    "Psalm 27:1 The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?",
    "Isaiah 41:13 For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
];

// Function to display a random Bible quote
function displayRandomBibleQuote() {
    const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = bibleQuotes[randomIndex];
}

// Call the function to display a random Bible quote
displayRandomBibleQuote();
