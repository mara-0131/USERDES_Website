const BANNERS = [
    {
    image: "assets/1.png", alt: "Adela banner",
    title: "PRIMA BANNER",
    bg: "linear-gradient(135deg, #ffd166, #e76f51)", link: "productPage.html?id=v2"
  },
  {
    image: "assets/adela.gif", alt: "Prima banner",
    title: "PRIMA BANNER",
    bg: "linear-gradient(135deg, #ff4d79, #7a1030)", link: "productPage.html?id=v2"
  },
  {
    image: "assets/3.png", alt: "XG banner",
    title: "XG BANNER",
    bg: "linear-gradient(135deg, #b388ff, #3b1c78)", link: "productPage.html?id=v15"
  },
  {
    image: "assets/hinata.gif", alt: "XG banner",
    title: "XG BANNER",
    bg: "linear-gradient(135deg, #b388ff, #3b1c78)", link: "productPage.html?id=v15"
  },
  {
    image: "assets/5.png", alt: "mama banner",
    title: "MAMA BANNER",
    bg: "linear-gradient(135deg, #ffd166, #e76f51)", link: "vinylPage.html"
  }
];


const CATEGORIES = {
  vinyl: { label: "VINYLS", single: "Vinyl", type: "VINYL RECORDS", unit: "Number of Records", page: "vinylPage.html" }
};

const PRODUCTS = [

  /* ---------- POP ---------- */
  {
    image: "assets/slayyyter.jpg", alt: "slayyyter",
    id: "v1", category: "vinyl", cover: "vinyl", sold: 340,
    sku: "RS-10001", subGenre: "Electropop, Hyperpop, Dance-Pop, Industrial Pop", discs: 1, extra: "",
    title: "WOR$T GIRL IN AMERICA", artist: "Slayyyter",
    releaseDate: "March 27, 2026", genre: "Pop", label: "Columbia Records",
    format: '12" Vinyl, 1LP, Coke Bottle Clear', price: 2595,
    description: "WOR$T GIRL IN AMERICA explores Slayyyter's Midwestern roots and teenage musical influences, mixing late-2000s pop, dance music, industrial sounds, punk and internet-era pop aesthetics. The album moves between aggressive club tracks, distorted production and more vulnerable moments.",
    tracks: ["DANCE...", "BEAT UP CHANEL$", "CANNIBALISM!", "OLD TECHNOLOGY", "CRANK", "GAS STATION", "YES GODDD", "UNKNOWN LOVERZ", "OLD FLING$", "I'M ACTUALLY KINDA FAMOUS", "$T. LOSER", "WHAT IS IT LIKE, TO BE LIKED?", "PRAYER BRITTANY MURPHY."]
  },
  {
    image: "assets/adela.jpg", alt: "adela",
    id: "v2", category: "vinyl", cover: "vinyl alt", sold: 120,
    sku: "RS-10002", subGenre: "Dance-Pop, Electropop, Contemporary Pop", discs: 1, extra: "",
    title: "PRIMA", artist: "ADÉLA",
    releaseDate: "2026-09-04", genre: "Pop", label: "Capitol Records",
    format: '12" Vinyl, 1LP, Standard Pink Vinyl', price: 2595,
    description: "PRIMA introduces ADÉLA as a new pop artist, combining high-energy pop tracks with more vulnerable material. The album title refers both to her first major musical statement and to her background in ballet, where \"prima\" evokes the prima ballerina.",
    tracks: ["KGB", "Nicole Kidman", "I'm The Man", "Boys", "Red Bottoms", "Hitachi", "Fantasize", "Starving Artist", "Marijuana", "Therapy", "Ain't In LA"]
  },
  {
    image: "assets/carly.jpg", alt: "carly",
    id: "v3", category: "vinyl", cover: "vinyl sun", sold: 410,
    sku: "RS-10003", subGenre: "Synth-Pop, Dance-Pop, Electropop", discs: 1, extra: "",
    title: "E•MO•TION", artist: "Carly Rae Jepsen",
    releaseDate: "2015-10-23", genre: "Pop", label: "Schoolboy Records",
    format: '12" Vinyl, 1LP, Black Vinyl', price: 2595,
    description: "E•MO•TION is Carly Rae Jepsen's third studio album and is heavily influenced by 1980s-inspired synth-pop, dance-pop and sophisticated contemporary pop songwriting. The album features collaborations with writers and producers including Sia, Ariel Rechtshaid, Dev Hynes, Rostam Batmanglij and Greg Kurstin.",
    tracks: ["Run Away With Me", "Emotion", "I Really Like You", "Gimmie Love", "All That", "Boy Problems", "Making the Most of the Night", "Your Type", "Let's Get Lost", "LA Hallucinations", "Warm Blood", "When I Needed You"]
  },
  {
    image: "assets/brat.jpg", alt: "charli",
    id: "v4", category: "vinyl", cover: "vinyl sun", sold: 390,
    sku: "RS-10004", subGenre: "Electropop, Hyperpop, Dance-Pop", discs: 2, extra: "",
    title: "Brat And It's Completely Different", artist: "Charli XCX",
    releaseDate: "2025-02-28", genre: "Pop", label: "Atlantic Records",
    format: '12" Vinyl, 2LP, Green Vinyl', price: 2595,
    description: "The expanded remix version of BRAT, transforming the original album through new collaborations and radically different production. Guests include Robyn, Yung Lean, Ariana Grande, Troye Sivan, Lorde, Tinashe, Billie Eilish, Bon Iver and Kesha.",
    tracks: ["360 feat. Robyn & Yung Lean", "Club classics feat. Bb trickz", "Sympathy is a knife feat. Ariana Grande", "I might say something stupid feat. The 1975 & Jon Hopkins", "Talk talk feat. Troye Sivan", "Von dutch (A.G. Cook Remix) feat. Addison Rae", "Everything is romantic feat. Caroline Polachek", "Rewind feat. Bladee", "So I feat. A. G. Cook", "Girl, so confusing feat. Lorde", "Apple feat. The Japanese House", "B2b feat. Tinashe", "Mean girls feat. Julian Casablancas", "I think about it all the time feat. Bon Iver", "365 feat. Shygirl", "Guess feat. Billie Eilish", "Spring breakers feat. Kesha"]
  },
  {
    image: "assets/lorde.jpg", alt: "lorde",
    id: "v5", category: "vinyl", cover: "vinyl", sold: 143,
    sku: "RS-10005", subGenre: "Electropop, Dream Pop, Electronica", discs: 1, extra: "",
    title: "Pure Heroine", artist: "Lorde",
    releaseDate: "November 19, 2013", genre: "Pop", label: "Republic Records",
    format: '1LP, 12", Black Vinyl', price: 2495,
    description: "Lorde's debut studio album, featuring minimalist electronic production, deep bass and programmed beats. The album established her distinctive sound through songs exploring youth, celebrity culture, isolation and modern teenage life.",
    tracks: ["Tennis Court", "400 Lux", "Royals", "Ribs", "Buzzcut Season", "Team", "Glory And Gore", "Still Sane", "White Teeth Teens", "A World Alone"]
  },

  /* ---------- K-POP ---------- */
  {
    image: "assets/twice.jpg", alt: "TWICE",
    id: "v6", category: "vinyl", cover: "vinyl", sold: 252,
    sku: "RS-10006", subGenre: "Dance-Pop, Electropop", discs: 1, extra: "",
    title: "THIS IS FOR", artist: "TWICE",
    releaseDate: "July 11, 2025", genre: "K-Pop", label: "Interscope Records",
    format: '1LP, 12", Dragonfruit Glitter Vinyl', price: 2395,
    description: "A polished K-pop album combining upbeat pop, dance production, and unit tracks across a 14-song set.",
    tracks: ["Four", "This Is For", "Options", "Mars", "Right Hand Girl", "Peach Gelato", "Hi Hello", "Battitude", "Dat Ahh Dat Ooh", "Let Love Go", "G.O.A.T.", "Talk", "Seesaw", "Heartbreak Avenue"]
  },
  {
    image: "assets/xg.jpg", alt: "XG",
    id: "v7", category: "vinyl", cover: "vinyl", sold: 210,
    sku: "RS-10007", subGenre: "House, Hip-Hop, R&B, Pop", discs: 1, extra: "",
    title: "THE CORE - 核", artist: "XG",
    releaseDate: "January 23, 2026", genre: "K-Pop", label: "Avex Music Creative",
    format: '12" Vinyl, 1LP, XG Ver.', price: 5293,
    description: "THE CORE - 核 represents XG's musical identity through a deliberately genre-crossing approach. The album moves between house, hip-hop, R&B, pop, pop-punk and other styles while XG describes the overall sound as X-POP.",
    tracks: ["XIGNAL (The Intro)", "GALA", "ROCK THE BOAT", "TAKE MY BREATH", "NO GOOD", "HYPNOTIZE", "UP NOW", "O.R.B (Obviously Reads Bro)", "4 SEASONS", "PS118"]
  },
  {
    image: "assets/aespa.jpg", alt: "aespa",
    id: "v8", category: "vinyl", cover: "vinyl", sold: 143,
    sku: "RS-10008", subGenre: "EDM, Electropop, Dance-Pop", discs: 1, extra: "",
    title: "LEMONADE", artist: "aespa",
    releaseDate: "May 29, 2026", genre: "K-Pop", label: "SM Entertainment",
    format: '12" LP, Neon Yellow Vinyl', price: 3495,
    description: "aespa’s second full-length album, built around high-energy electronic production while incorporating dance, rock, hyperpop, R&B and pop-rock influences. The album’s vinyl edition features the core 10-track album sequence.",
    tracks: ["WDA (Whole Different Animal) (Feat. G-DRAGON)", "LEMONADE", "SHAKIN'", "Can't Help Myself", "Camouflage", "Bite", "Switchblade (Feat. Ty Dolla $ign)", "Roll", "My Plan", "'Til We Die"]
  },
  {
    image: "assets/nmixx.jpg", alt: "NMIXX",
    id: "v9", category: "vinyl", cover: "vinyl", sold: 113,
    sku: "RS-10009", subGenre: "Alternative Pop, R&B, Hip-Hop, EDM, Latin Pop", discs: 1, extra: "",
    title: "Blue Valentine", artist: "NMIXX",
    releaseDate: "October 13, 2025", genre: "K-Pop", label: "JYP Entertainment",
    format: '12" LP, Marbled Vinyl', price: 2495,
    description: "NMIXX’s debut full-length album explores the conflicting and ambivalent sides of love through a wide-ranging collection of pop, alternative pop, R&B, hip-hop, EDM and Latin-influenced tracks.",
    tracks: ["Blue Valentine", "SPINNIN' ON IT", "Phoenix", "Reality Hurts", "RICO", "Game Face", "PODIUM", "Crush On You", "ADORE U", "Shape of Love", "O.O Part 1 (Baila)", "O.O Part 2 (Superhero)"]
  },
  {
    image: "assets/le ss.jpg", alt: "LE SSERAFIM",
    id: "v10", category: "vinyl", cover: "vinyl", sold: 121,
    sku: "RS-10010", subGenre: "Dance-Pop, Hip-Hop, Pop-Rap", discs: 1, extra: "",
    title: "SPAGHETTI", artist: "LE SSERAFIM",
    releaseDate: "January 30, 2026", genre: "K-Pop", label: "SOURCE MUSIC",
    format: '12" LP Tomato Red / Neon Yellow Vinyl', price: 2395,
    description: "LE SSERAFIM’s first single album, centered on the playful and energetic “SPAGHETTI” featuring j-hope of BTS. The vinyl edition expands the original single with alternate, member and remix-style versions across both sides of the record.",
    tracks: ["SPAGHETTI (feat. j-hope of BTS)", "Pearlies (My oyster is the world)", "SPAGHETTI (Member ver.)", "SPAGHETTI (feat. j-hope of BTS) (English ver.)", "SPAGHETTI (feat. j-hope of BTS) (Hot Chili ver.)", "SPAGHETTI (feat. j-hope of BTS) (Creamy Cheese ver.)", "SPAGHETTI (feat. j-hope of BTS) (Spicy Jalapeño ver.)"]
  },
  {
    image: "assets/seven.jpg", alt: "SEVENTEEN",
    id: "v11", category: "vinyl", cover: "vinyl", sold: 121,
    sku: "RS-10011", subGenre: "Dance-Pop, EDM, Hip-Hop, R&B, Pop-Rock", discs: 1, extra: "",
    title: "HAPPY BURSTDAY", artist: "SEVENTEEN",
    releaseDate: "October 24, 2025", genre: "K-Pop", label: "PLEDIS Entertainment",
    format: '12" LP, Black Splatter on Evergreen Vinyl', price: 2895,
    description: "SEVENTEEN’s fifth studio album commemorating the group’s 10th anniversary. The 16-track record combines group songs with individual solo tracks from all 13 members, alongside collaborations with Pharrell Williams and Timbaland.",
    tracks: ["HBD", "THUNDER", "Bad Influence", "Skyfall (THE 8 Solo)", "Fortunate Change (JOSHUA Solo)", "99.9% (WONWOO Solo)", "Raindrops (SEUNGKWAN Solo)", "Damage (HOSHI Solo) (feat. Timbaland)", "Shake It Off (MINGYU Solo)", "Happy Virus (DK Solo)", "Destiny (WOOZI Solo)", "Shining Star (VERNON Solo)", "Gemini (JUN Solo)", "Trigger (DINO Solo)", "Coincidence (JEONGHAN Solo)", "Jungle (S.COUPS Solo)"]
  },

  /* ---------- ALTERNATIVE ROCK ---------- */
  {
    image: "assets/para.jpg", alt: "paramore",
    id: "v12", category: "vinyl", cover: "vinyl", sold: 480,
    sku: "RS-10012", subGenre: "Pop-Punk, Emo, Emo Pop", discs: 1, extra: "",
    title: "Brand New Eyes", artist: "Paramore",
    releaseDate: "2009-11-23", genre: "Alternative Rock", label: "Fueled by Ramen",
    format: '12" Vinyl, 1LP, Black Vinyl', price: 2595,
    description: "Brand New Eyes combines Paramore's energetic pop-punk foundation with darker alternative-rock and emo elements. The album deals heavily with conflict, relationships, personal growth and tensions within the band.",
    tracks: ["Careful", "Ignorance", "Playing God", "Brick by Boring Brick", "Turn It Off", "The Only Exception", "Feeling Sorry", "Looking Up", "Where the Lines Overlap", "Misguided Ghosts", "All I Wanted"]
  },
  {
    image: "assets/cran.jpg", alt: "cranberries",
    id: "v13", category: "vinyl", cover: "vinyl", sold: 300,
    sku: "RS-10013", subGenre: "Alternative Rock, Dream Pop, Indie Rock", discs: 1, extra: "",
    title: "Everybody Else Is Doing It, So Why Can't We?", artist: "The Cranberries",
    releaseDate: "1993-03-01", genre: "Alternative Rock", label: "Island Records",
    format: '12" Vinyl, 1LP, Black Vinyl', price: 2595,
    description: "The Cranberries' debut album introduced Dolores O'Riordan's distinctive vocals alongside Noel Hogan's atmospheric guitar work. The album blends alternative rock, dream-pop and jangly guitar textures and includes the band's signature songs \"Dreams\" and \"Linger.\"",
    tracks: ["I Still Do", "Dreams", "Sunday", "Pretty", "Waltzing Back", "Not Sorry", "Linger", "Wanted", "Still Can't", "I Will Always", "How", "Put Me Down"]
  },
  {
    image: "assets/radiohead.png", alt: "Radiohead",
    id: "v14", category: "vinyl", cover: "vinyl", sold: 630,
    sku: "RS-10014", subGenre: "Britpop, Art Rock", discs: 1, extra: "",
    title: "The Bends", artist: "Radiohead",
    releaseDate: "March 13, 1995", genre: "Alternative Rock", label: "XL Recordings",
    format: '1LP, 12", Black Vinyl', price: 2895,
    description: "A landmark 1990s alternative rock album that expanded Radiohead's sound from guitar-driven rock into more atmospheric and emotionally layered territory.",
    tracks: ["Planet Telex", "The Bends", "High and Dry", "Fake Plastic Trees", "Bones", "(Nice Dream)", "Just", "My Iron Lung", "Bullet Proof ... I Wish I Was", "Black Star", "Sulk", "Street Spirit (Fade Out)"]
  },
  {
    image: "assets/mcr.jpg", alt: "My Chemical Romance",
    id: "v15", category: "vinyl", cover: "vinyl", sold: 111,
    sku: "RS-10015", subGenre: "Emo, Pop Punk, Post-Hardcore", discs: 1, extra: "",
    title: "Three Cheers for Sweet Revenge", artist: "My Chemical Romance",
    releaseDate: "June 8, 2004", genre: "Alternative Rock", label: "Reprise Records",
    format: '1LP, 12", Ruby & Ghostly Swirl Vinyl', price: 2695,
    description: "My Chemical Romance's breakthrough album, blending emo, punk rock and post-hardcore with theatrical storytelling. The album features iconic tracks including \"Helena\", \"I'm Not Okay (I Promise)\", and \"The Ghost of You.\"",
    tracks: ["Helena", "Give 'Em Hell, Kid", "To the End", "You Know What They Do to Guys Like Us in Prison", "I'm Not Okay (I Promise)", "The Ghost of You", "The Jetset Life Is Gonna Kill You", "Interlude", "Thank You for the Venom", "Hang 'Em High", "It's Not a Fashion Statement, It's a Deathwish", "Cemetery Drive", "I Never Told You What I Do for a Living"]
  },
  {
    image: "assets/pierce.jpg", alt: "Pierce the Veil",
    id: "v16", category: "vinyl", cover: "vinyl", sold: 213,
    sku: "RS-10016", subGenre: "Post-Hardcore, Emo", discs: 1, extra: "",
    title: "Collide with the Sky", artist: "Pierce the Veil",
    releaseDate: "November 10, 2023", genre: "Alternative Rock", label: "Fearless Records",
    format: '1LP, 12", Sea Blue Vinyl', price: 2295,
    description: "A defining post-hardcore album known for its energetic guitars, emotional songwriting and dynamic vocals.",
    tracks: ["May These Noises Startle You In Your Sleep Tonight", "Hell Above", "A Match Into Water", "King For A Day", "Bulls In The Bronx", "Props & Mayhem", "Tangled In The Great Escape", "I’m Low On Gas And You Need A Jacket", "The First Punch", "One Hundred Sleepless Nights", "Stained Glass Eyes And Colorful Tears", "Hold On Till May"]
  },
  {
    image: "assets/nirv.jpg", alt: "Nirvana",
    id: "v17", category: "vinyl", cover: "vinyl", sold: 124,
    sku: "RS-10017", subGenre: "Grunge, Alternative Rock", discs: 1, extra: "",
    title: "Nevermind", artist: "Nirvana",
    releaseDate: "September 24, 1991", genre: "Alternative Rock", label: "DGC",
    format: '1LP, 12", Silver Vinyl', price: 2395,
    description: "Nirvana's landmark album that brought the Seattle grunge sound to a worldwide audience. Combining heavy guitar riffs, melodic songwriting and raw punk energy.",
    tracks: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]
  },

  {
    image: "assets/evan.jpg", alt: "evanescence",
    id: "v18", category: "vinyl", cover: "vinyl violet", sold: 620,
    sku: "RS-10018", subGenre: "Alternative Metal, Nu Metal, Gothic Rock", discs: 1, extra: "",
    title: "Fallen", artist: "Evanescence",
    releaseDate: "2003-03-04", genre: "Alternative Rock", label: "Wind-up Records",
    format: '12" Vinyl, 1LP, Clear Smoke', price: 2595,
    description: "Fallen established Evanescence's signature combination of heavy guitar-driven rock, piano, dramatic vocals, orchestral textures and gothic atmosphere. It became one of the defining rock albums of the early 2000s.",
    tracks: ["Going Under", "Bring Me to Life", "Everybody's Fool", "My Immortal", "Haunted", "Tourniquet", "Imaginary", "Taking Over Me", "Hello", "My Last Breath", "Whisper"]
  },

  /* ---------- COUNTRY ---------- */
  {
    image: "assets/dolly.jpg", alt: "Dolly",
    id: "v19", category: "vinyl", cover: "vinyl", sold: 140,
    sku: "RS-10019", subGenre: "Country Pop, Country Rock, Bluegrass", discs: 1, extra: "",
    title: "Diamonds & Rhinestones: The Greatest Hits Collection", artist: "Dolly Parton",
    releaseDate: "September 9, 2022", genre: "Country", label: "Dolly Records",
    format: '2LP, 12", Black Vinyl', price: 2895,
    description: "A career-spanning collection bringing together Dolly Parton's major hits and notable collaborations from across five decades.",
    tracks: ["9 to 5", "Jolene", "Here You Come Again", "Islands in the Stream", "I Will Always Love You", "Coat of Many Colors", "My Tennessee Mountain Home", "The Bargain Store", "Baby I'm Burnin'", "Better Get to Livin'", "Why'd You Come in Here Lookin' Like That", "Love Is Like a Butterfly", "Heartbreaker", "Red Shoes", "The Seeker", "Together You & I", "Two Doors Down", "When Life Is Good Again", "Tennessee Homesick Blues", "It's All Wrong But It's All Right", "Real Love", "Silver Threads and Golden Needles", "Faith"]
  },
  {
    image: "assets/taylor.jpg", alt: "Taylor Swift",
    id: "v20", category: "vinyl", cover: "vinyl", sold: 621,
    sku: "RS-10020", subGenre: "Pop, Teen Country", discs: 1, extra: "",
    title: "Taylor Swift", artist: "Taylor Swift",
    releaseDate: "May 6, 2016", genre: "Country", label: "Big Machine Records",
    format: '1LP, 12", Black Vinyl', price: 8295,
    description: "Taylor Swift's self-titled debut album, combining country songwriting with pop-influenced melodies and introducing the singer-songwriter's early signature style.",
    tracks: ["Tim McGraw", "Picture to Burn", "Teardrops on My Guitar", "A Place in This World", "Cold as You", "The Outside", "Tied Together with a Smile", "Stay Beautiful", "Should've Said No", "Mary's Song (Oh My My My)", "Our Song", "I'm Only Me When I'm with You"]
  },
  {
    image: "assets/johnny.jpg", alt: "Johnny Cash",
    id: "v21", category: "vinyl", cover: "vinyl", sold: 341,
    sku: "RS-10021", subGenre: "Live Country, Outlaw Country", discs: 1, extra: "",
    title: "At Folsom Prison", artist: "Johnny Cash",
    releaseDate: "May 1, 1968", genre: "Country", label: "Columbia Records",
    format: '1LP, 12", Stereo Vinyl', price: 2795,
    description: "A landmark live recording captured at Folsom State Prison in California, documenting Johnny Cash's historic performance and his powerful connection with prison audiences.",
    tracks: ["Folsom Prison Blues", "Dark as the Dungeon", "I Still Miss Someone", "Cocaine Blues", "25 Minutes to Go", "Orange Blossom Special", "The Long Black Veil", "Send a Picture of Mother", "The Wall", "Dirty Old Egg-Sucking Dog", "Flushed from the Bathroom of Your Heart", "Jackson", "Give My Love to Rose", "I Got Stripes", "Green, Green Grass of Home", "Greystone Chapel"]
  },
  {
    image: "assets/shania.jpg", alt: "Shania Twain",
    id: "v22", category: "vinyl", cover: "vinyl", sold: 243,
    sku: "RS-10022", subGenre: "Contemporary Country", discs: 1, extra: "",
    title: "The Woman in Me", artist: "Shania Twain",
    releaseDate: "October 14, 2016", genre: "Country", label: "Mercury Nashville",
    format: '1LP, 12", Black Vinyl', price: 2295,
    description: "Shania Twain's breakthrough second studio album, blending contemporary country with pop-oriented production and showcasing the songs that established her as a major country music star.",
    tracks: ["Home Ain't Where His Heart Is (Anymore)", "Any Man of Mine", "Whose Bed Have Your Boots Been Under?", "(If You're Not in It for Love) I'm Outta Here!", "The Woman in Me (Needs the Man in You)", "Is There Life After Love?", "If It Don't Take Two", "You Win My Love", "Raining on Our Love", "Leaving Is the Only Way Out", "No One Needs to Know", "God Bless the Child"]
  },
  {
    image: "assets/beyonce2.jpg", alt: "Beyoncé",
    id: "v23", category: "vinyl", cover: "vinyl", sold: 843,
    sku: "RS-10023", subGenre: "Americana, Contemporary R&B, Western", discs: 1, extra: "",
    title: "COWBOY CARTER", artist: "Beyoncé",
    releaseDate: "June 28, 2024", genre: "Country", label: "Columbia Records",
    format: '2LP, 12", Black Vinyl', price: 4295,
    description: "Beyoncé's genre-spanning eighth studio album, drawing from country, Americana, R&B, blues, rock, soul and pop while exploring the history and boundaries of American roots music.",
    tracks: ["AMERIICAN REQUIEM", "BLACKBIIRD", "16 CARRIAGES", "PROTECTOR", "MY ROSE", "SMOKE HOUR ★ WILLIE NELSON", "TEXAS HOLD 'EM", "BODYGUARD", "DOLLY P", "JOLENE", "DAUGHTER", "SPAGHETTII", "ALLIIGATOR TEARS", "SMOKE HOUR II", "JUST FOR FUN", "II MOST WANTED", "LEVII'S JEANS", "FLAMENCO", "THE LINDA MARTELL SHOW", "YA YA", "OH LOUISIANA", "DESERT EAGLE", "RIIVERDANCE", "II HANDS II HEAVEN", "TYRANT", "SWEET ★ HONEY ★ BUCKIIN'", "AMEN"]
  },
  {
    image: "assets/the chicks.jpg", alt: "The Chicks",
    id: "v24", category: "vinyl", cover: "vinyl", sold: 243,
    sku: "RS-10024", subGenre: "Contemporary Country", discs: 1, extra: "",
    title: "Fly", artist: "The Chicks",
    releaseDate: "April 15, 2016", genre: "Country", label: "Sony Legacy",
    format: '2LP, 12", Black Vinyl', price: 2295,
    description: "The Chicks' fifth studio album, combining contemporary country with pop and rock influences.",
    tracks: ["Ready to Run", "If I Fall You're Going Down with Me", "Cowboy Take Me Away", "Cold Day in July", "Goodbye Earl", "Hello Mr. Heartache", "Don't Waste Your Heart", "Sin Wagon", "Without You", "Some Days You Gotta Dance", "Hole in My Head", "Heartbreak Town", "Ain't No Thang But a Chickin' Wang", "Let Him Fly"]
  },
  /* ---------- POP ROCK ---------- */
    {
    image: "assets/avril.jpg", alt: "avril",
    id: "v25", category: "vinyl", cover: "vinyl alt", sold: 350,
    sku: "RS-10025", subGenre: "Pop-Punk, Power Pop, Punk Rock", discs: 1, extra: "",
    title: "The Best Damn Thing", artist: "Avril Lavigne",
    releaseDate: "2007-04-17", genre: "Pop", label: "RCA Records",
    format: '12" Vinyl, 1LP, Black Vinyl', price: 2595,
    description: "The Best Damn Thing is Avril Lavigne's third studio album and represents a move toward a brighter, more polished pop-punk and power-pop sound. It combines energetic guitars, cheerleader-style hooks and upbeat relationship songs, including the international hit \"Girlfriend.\"",
    tracks: ["Girlfriend", "I Can Do Better", "Runaway", "The Best Damn Thing", "When You're Gone", "Everything Back But You", "Hot", "Innocence", "I Don't Have to Try", "One of Those Girls", "Contagious", "Keep Holding On"]
  },
  {
    image: "assets/nirvana.jpg", alt: "nirvana",
    id: "v26", category: "vinyl", cover: "vinyl", sold: 124,
    sku: "RS-10026", subGenre: "Grunge, Alternative Rock", discs: 1, extra: "",
    title: "Nevermind", artist: "Nirvana",
    releaseDate: "September 24, 1991", genre: "Pop Rock", label: "DGC",
    format: '1LP, 12", Silver Vinyll', price: 2395,
    description: "Nirvana's landmark album that brought the Seattle grunge sound to a worldwide audience. Combining heavy guitar riffs, melodic songwriting and raw punk energy.",
    tracks: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]
  },
{
    image: "assets/beatles.jpg", alt: "beatles",
    id: "v27", category: "vinyl", cover: "vinyl", sold: 210,
    sku: "RS-10027", subGenre: "Beat Music, Merseybeat", discs: 1, extra: "",
    title: "Please Please Me", artist: "The Beatles",
    releaseDate: "March 22, 1963", genre: "Pop Rock", label: "Parlophone",
    format: '1LP, 12", Black Vinyl', price: 2295,
    description: "The Beatles' explosive debut album, capturing the band's early Merseybeat sound through energetic originals and covers.",
    tracks: ["I Saw Her Standing There", "Misery", "Anna (Go To Him)", "Chains", "Boys", "Ask Me Why", "Please Please Me", "Love Me Do", "P.S. I Love You", "Baby It's You", "Do You Want To Know A Secret", "A Taste Of Honey", "There's A Place", "Twist And Shout"]
  },
{
    image: "assets/weezer.jpg", alt: "weezer",
    id: "v28", category: "vinyl", cover: "vinyl", sold: 219,
    sku: "RS-10028", subGenre: "Power Pop, Indie Rock", discs: 1, extra: "",
    title: "Weezer (The Green Album)", artist: "Weezer",
    releaseDate: "May 15, 2001", genre: "Pop Rock", label: "Geffen Records",
    format: '1LP, 12", Green Vinyl', price: 2255,
    description: "A concise, hook-heavy alternative rock album built around catchy guitar riffs, melodic songwriting and Weezer's signature power-pop sound.",
    tracks: ["Don't Let Go", "Photograph", "Hash Pipe", "Island In The Sun", "Crab", "Knock-Down Drag-Out", "Smile", "Simple Pages", "Glorious Day", "O Girlfriend"]
  },
{
    image: "assets/queen.jpg", alt: "queen",
    id: "v29", category: "vinyl", cover: "vinyl", sold: 320,
    sku: "RS-10029", subGenre: "Hard Rock, Classic Rock", discs: 1, extra: "",
    title: "The Game", artist: "Queen",
    releaseDate: "June 30, 1980", genre: "Pop Rock", label: "EMI",
    format: '1LP, 12", Black Vinyl', price: 2955,
    description: "A versatile Queen album combining hard rock, pop rock, funk-influenced grooves and early synthesizer experimentation.",
    tracks: ["Play The Game", "Dragon Attack", "Another One Bites The Dust", "Need Your Loving Tonight", "Crazy Little Thing Called Love", "Rock It (Prime Jive)", "Don't Try Suicide", "Sail Away Sweet Sister", "Coming Soon", "Save Me"]
  },
{
    image: "assets/guns.jpg", alt: "guns-n-roses",
    id: "v30", category: "vinyl", cover: "vinyl", sold: 120,
    sku: "RS-10030", subGenre: "Heavy Metal, Glam Metal, Hard Rock", discs: 1, extra: "",
    title: "Appetite For Destruction", artist: "Guns N' Roses",
    releaseDate: "July 21, 1987", genre: "Pop Rock", label: "Geffen Records",
    format: '1LP, 12", Black Vinyl', price: 2555,
    description: "A raw and aggressive hard rock debut that established Guns N' Roses through distorted guitars, powerful vocals, memorable riffs and an unpolished rock-and-roll attitude.",
    tracks: ["Welcome To The Jungle", "It's So Easy", "Nightrain", "Out Ta Get Me", "Mr. Brownstone", "Paradise City", "My Michelle", "Think About You", "Sweet Child O' Mine", "You're Crazy", "Anything Goes", "Rocket Queen"]
  },
  /* ---------- R n B ---------- */
  {
    image: "assets/michael.jpg", alt: "michael-jackson",
    id: "v31", category: "vinyl", cover: "vinyl", sold: 154,
    sku: "RS-10031", subGenre: "Pop, Dance-Pop", discs: 2, extra: "",
    title: "Invincible", artist: "Michael Jackson",
    releaseDate: "October 30, 2001", genre: "RnB", label: "Epic Records",
    format: '2LP, 12", Black Vinyl', price: 2795,
    description: "A polished late-career Michael Jackson album blending contemporary R&B, pop, funk, soul and electronic production.",
    tracks: ["Unbreakable", "Heartbreaker", "Invincible", "Break of Dawn", "Heaven Can Wait", "You Rock My World", "Butterflies", "Speechless", "2000 Watts", "You Are My Life", "Privacy", "Don't Walk Away", "Cry", "The Lost Children", "Whatever Happens", "Threatened"]
  },

{
    image: "assets/mariah.jpg", alt: "mariah-carey",
    id: "v32", category: "vinyl", cover: "vinyl", sold: 254,
    sku: "RS-10032", subGenre: "Pop, Hip-Hop Soul", discs: 2, extra: "",
    title: "The Emancipation of Mimi", artist: "Mariah Carey",
    releaseDate: "March 30, 2005", genre: "RnB", label: "Island Records",
    format: '2LP, 12", Black Vinyl', price: 2395,
    description: "A polished R&B and pop comeback album built around Mariah Carey's vocals, soulful production and collaborations with artists including Jermaine Dupri, Snoop Dogg, Twista and Nelly.",
    tracks: ["It's Like That", "We Belong Together", "Shake It Off", "Mine Again", "Say Somethin'", "Stay The Night", "Get Your Number", "One And Only", "Circles", "Your Girl", "I Wish You Knew", "To The Floor", "Joy Ride", "Fly Like A Bird", "We Belong Together (Remix)", "Don't Forget About Us", "Making It Last All Night", "Sprung", "Secret Love"]
  },

{
    image: "assets/sza.jpg", alt: "sza",
    id: "v33", category: "vinyl", cover: "vinyl", sold: 310,
    sku: "RS-10033", subGenre: "Neo-Soul, Hip-Hop", discs: 2, extra: "",
    title: "Ctrl", artist: "SZA",
    releaseDate: "June 9, 2017", genre: "RnB", label: "Top Dawg Entertainment",
    format: '2LP, 12", Translucent Green Vinyl', price: 3295,
    description: "An intimate alternative R&B album exploring relationships, insecurity, self-image and emotional vulnerability through atmospheric production and SZA's conversational songwriting.",
    tracks: ["Supermodel", "Love Galore", "Doves In The Wind", "Drew Barrymore", "Prom", "The Weekend", "Go Gina", "Garden (Say It Like Dat)", "Broken Clocks", "Anything", "Wavy (Interlude)", "Normal Girl", "Pretty Little Birds", "20 Something"]
  },

{
    image: "assets/daniel.jpg", alt: "daniel-caesar",
    id: "v34", category: "vinyl", cover: "vinyl", sold: 270,
    sku: "RS-10034", subGenre: "Neo-Soul, Gospel Soul", discs: 2, extra: "",
    title: "Freudian", artist: "Daniel Caesar",
    releaseDate: "August 25, 2017", genre: "RnB", label: "Golden Child Recordings",
    format: '2LP, 12", Colored Vinyl', price: 2595,
    description: "A soulful, intimate R&B album combining gospel influences, warm instrumentation and vulnerable songwriting about love, faith and emotional connection.",
    tracks: ["Get You", "Best Part", "Hold Me Down", "Neu Roses (Transgressor's Song)", "Loose", "We Find Love", "Blessed", "Take Me Away", "Transform", "Freudian"]
  },

{
    image: "assets/neyo.jpg", alt: "ne-yo",
    id: "v35", category: "vinyl", cover: "vinyl", sold: 400,
    sku: "RS-10035", subGenre: "Soul, Pop", discs: 2, extra: "",
    title: "In My Own Words", artist: "Ne-Yo",
    releaseDate: "February 28, 2006", genre: "RnB", label: "Def Jam Recordings",
    format: '2LP, 12", Black Vinyl', price: 2395,
    description: "A smooth contemporary R&B debut centered on romantic songwriting, polished production and Ne-Yo's signature vocal style.",
    tracks: ["Stay", "Let Me Get This Right", "So Sick", "When You're Mad", "It Just Ain't Right", "Mirror", "Sign Me Up", "I Ain't Gotta Tell You", "Get Down Like That", "Sexy Love", "Let Go", "Time"]
  },

  {
    image: "assets/beyonce.jpg", alt: "Beyoncé",
    id: "v36", category: "vinyl", cover: "vinyl", sold: 240,
    sku: "RS-10036", subGenre: "Contemporary R&B, Funk, Hip-Hop", discs: 1, extra: "",
    title: "B'Day", artist: "Beyoncé",
    releaseDate: "September 4, 2006", genre: "RnB", label: "Columbia Records",
    format: '2LP, 12", Black Vinyl', price: 2595,
    description: "An energetic R&B and pop album built around punchy production, funk influences and Beyoncé's commanding vocals.",
    tracks: ["Deja Vu", "Get Me Bodied", "Suga Mama", "Upgrade U", "Ring the Alarm", "Kitty Kat", "Freakum Dress", "Green Light", "Irreplaceable", "Resentment", "Encore for the Fans", "Listen", "Get Me Bodied (Extended Mix)"]
  },

  /* ---------- MUSICAL ---------- */
  {
    image: "assets/hamilton.jpg", alt: "hamilton",
    id: "v37", category: "vinyl", cover: "vinyl violet", sold: 550,
    sku: "RS-10037", subGenre: "Musical Theatre, Hip-Hop Musical, Contemporary Musical", discs: 4, extra: "",
    title: "Hamilton", artist: "Original Broadway Cast Recording",
    releaseDate: "2016-04-15", genre: "Musical", label: "Atlantic Records",
    format: '12" Vinyl, 4LP Box Set, Black Vinyl', price: 2595,
    description: "Hamilton is a groundbreaking Broadway musical about the life and legacy of Founding Father Alexander Hamilton. Lin-Manuel Miranda combines musical theatre with hip-hop, R&B, pop and traditional show-tune influences to tell the story of Hamilton's rise, political relationships, family life and eventual confrontation with Aaron Burr. The recording captures the original Broadway cast.",
    tracks: ["Alexander Hamilton", "Aaron Burr, Sir", "My Shot", "The Story of Tonight", "The Schuyler Sisters", "Farmer Refuted", "You'll Be Back", "Right Hand Man", "A Winter's Ball", "Helpless", "Satisfied", "The Story of Tonight (Reprise)", "Wait For It", "Stay Alive", "Ten Duel Commandments", "Meet Me Inside", "That Would Be Enough", "Guns and Ships", "History Has Its Eyes on You", "Yorktown (The World Turned Upside Down)", "What Comes Next?", "Dear Theodosia", "Non-Stop", "What'd I Miss", "Cabinet Battle #1", "Take a Break", "Say No to This", "The Room Where It Happens", "Schuyler Defeated", "Cabinet Battle #2", "Washington on Your Side", "One Last Time", "I Know Him", "The Adams Administration", "We Know", "Hurricane", "The Reynolds Pamphlet", "Burn", "Blow Us All Away", "Stay Alive (Reprise)", "It's Quiet Uptown", "The Election of 1800", "Your Obedient Servant", "Best of Wives and Best of Women", "The World Was Wide Enough", "Who Lives, Who Dies, Who Tells Your Story"]
  },
  {
    image: "assets/mamma.jpg", alt: "mamma-mia",
    id: "v38", category: "vinyl", cover: "vinyl", sold: 431,
    sku: "RS-10038", subGenre: "Jukebox Musical, Pop Musical", discs: 2, extra: "",
    title: "Mamma Mia!", artist: "Original Londn Cast",
    releaseDate: "August 1, 2025", genre: "Musical", label: "Polydor",
    format: '2LP, 12", Blue & White Vinyl', price: 4295,
    description: "The original cast recording of the ABBA jukebox musical, featuring ABBA classics performed by the original London cast.",
    tracks: ["Overture / Prologue", "Honey, Honey", "Money, Money, Money", "Mamma Mia", "Thank You For The Music", "Chiquitita", "Dancing Queen", "Lay All Your Love On Me", "Super Trouper", "Gimme! Gimme! Gimme! (A Man After Midnight)", "The Name Of The Game", "Voulez-Vous", "Entr'acte", "Under Attack", "One Of Us", "S.O.S.", "Does Your Mother Know", "Knowing Me, Knowing You", "Our Last Summer", "Slipping Through My Fingers", "The Winner Takes It All", "Take A Chance On Me", "I Do, I Do, I Do, I Do, I Do", "I Have A Dream"]
  },

{
    image: "assets/heathers.jpg", alt: "heathers",
    id: "v39", category: "vinyl", cover: "vinyl", sold: 233,
    sku: "RS-10039", subGenre: "Rock Musical, Teen Musical, Dark Comedy", discs: 2, extra: "",
    title: "Heathers — The Musical", artist: "Original West End Cast",
    releaseDate: "March 1, 2019", genre: "Musical", label: "Ghostlight Records",
    format: '2LP, 12", Black Vinyl', price: 2595,
    description: "A darkly comic rock musical following Veronica Sawyer as she navigates popularity, bullying, romance and the dangerous social hierarchy of Westerberg High.",
    tracks: ["Beautiful", "Candy Store", "Fight For Me", "Freeze Your Brain", "Big Fun", "Dead Girl Walking", "The Me Inside Of Me", "You're Welcome", "Never Shut Up Again", "Our Love Is God", "My Dead Gay Son", "Seventeen", "Shine A Light", "Lifeboat", "Shine A Light (Reprise)", "I Say No", "Kindergarten Boyfriend", "Yo Girl", "Meant To Be Yours", "Dead Girl Walking (Reprise)", "I Am Damaged", "Seventeen (Reprise)"]
  },

{
    image: "assets/mean.jpg", alt: "mean-girls",
    id: "v40", category: "vinyl", cover: "vinyl", sold: 311,
    sku: "RS-10040", subGenre: "Teen Musical, Comedy Musical, Pop Musical", discs: 2, extra: "",
    title: "Mean Girls", artist: "Original Broadway Cast",
    releaseDate: "August 24, 2018", genre: "Musical", label: "Atlantic Records",
    format: '2LP, 12", Pink Vinyl', price: 4195,
    description: "A contemporary Broadway musical adaptation of Tina Fey's high-school comedy, combining pop-oriented songs with sharp humor and ensemble-driven musical theatre.",
    tracks: ["A Cautionary Tale", "It Roars", "Where Do You Belong?", "Meet The Plastics", "Stupid With Love", "Apex Predator", "What's Wrong With Me?", "Stupid With Love (Reprise)", "Sexy", "Someone Gets Hurt", "Revenge Party", "Fearless", "Stop", "What's Wrong With Me? (Reprise)", "Whose House Is This?", "More Is Better", "Someone Gets Hurt (Reprise)", "World Burn", "I'd Rather Be Me", "Do This Thing", "I See Stars"]
  },

{
    image: "assets/ride.jpg", alt: "ride-the-cyclone",
    id: "v41", category: "vinyl", cover: "vinyl", sold: 171,
    sku: "RS-10041", subGenre: "Dark Comedy Musical, Experimental Musical, Rock Musical", discs: 2, extra: "",
    title: "Ride the Cyclone", artist: "World Premiere Cast",
    releaseDate: "May 7, 2021", genre: "Musical", label: "Ghostlight Records",
    format: '2LP, 12", Black Vinyl', price: 2195,
    description: "A macabre and eccentric musical about six teenagers who die in a roller-coaster accident and compete for a chance to return to life through a supernatural storytelling contest.",
    tracks: ["Karnak's Dream of Life", "Welcome...", "The Uranium Suite", "Jane Doe's Entrance", "What the World Needs", "Meet Noel Gruber", "Noel's Lament", "Every Story's Got A Lesson", "This Song Is Awesome", "Talia", "Meet Ricky Potts", "Space Age Bachelor Man", "Meet Jane Doe", "The Ballad of Jane Doe", "The New Birthday Song", "Jawbreaker", "Sugar Cloud", "It's Not A Game / It's Just A Ride", "Still Here?", "Be Safe, Be Good (for Rachel)", "A World Inside", "Karnak's Theme", "Noel's Lament (Clean Version)"]
  },

{
    image: "assets/wicked.jpg", alt: "wicked",
    id: "v42", category: "vinyl", cover: "vinyl", sold: 497,
    sku: "RS-10042", subGenre: "Broadway Musical, Contemporary Musical, Show Tunes", discs: 2, extra: "",
    title: "Wicked", artist: "Original Broadway Cast",
    releaseDate: "August 30, 2024", genre: "Musical", label: "Decca Broadway",
    format: '2LP, 12", Green & Black Split-Color Vinyl', price: 4895,
    description: "The original Broadway cast recording of Stephen Schwartz's Wicked, following the unlikely friendship between Elphaba and Glinda before Dorothy's arrival in Oz.",
    tracks: ["No One Mourns The Wicked", "Dear Old Shiz", "The Wizard And I", "What Is This Feeling?", "Something Bad", "Dancing Through Life", "Popular", "I'm Not That Girl", "One Short Day", "A Sentimental Man", "Defying Gravity", "Thank Goodness", "Wonderful", "I'm Not That Girl (Reprise)", "As Long As You're Mine", "No Good Deed", "March Of The Witch Hunters", "For Good", "Finale"]
  },
  /* ---------- EDM ---------- */
  {
    image: "assets/tiffany.jpg", alt: "halo",
    id: "v43", category: "vinyl", cover: "vinyl", sold: 122,
    sku: "RS-10043", subGenre: "Hyperpop, Electropop, Alternative Pop", discs: 1, extra: "",
    title: "Halo", artist: "Tiffany Day",
    releaseDate: "April 3, 2026", genre: "EDM", label: "Many Hats",
    format: '1LP, 12", Coke Bottle Clear Vinyl', price: 2295,
    description: "A hyper-digital pop album blending emotional songwriting with electronic production, playful synth textures and contemporary internet-pop aesthetics.",
    tracks: ["EVERYTHING I'VE EVER WANTED", "DOIT4ME", "SAME LA", "PRETTY4U", "COPYCAT", "NO LUCK", "BREAKUP", "TELL ME WHAT I DID", "START OVER", "LOOK UP", "AMERICAN GIRL", "FAREWELL TOLEDO", "ITS NOT LIKE THAT ANYMORE"]
  },

{
    image: "assets/aidn.jpg", alt: "xoxo",
    id: "v44", category: "vinyl", cover: "vinyl", sold: 78,
    sku: "RS-10044", subGenre: "Hyperpop, Alternative Electronic", discs: 1, extra: "",
    title: "xoxo", artist: "aidn.",
    releaseDate: "August 28, 2026", genre: "EDM", label: "aidn.",
    format: '1LP, 12", Black Vinyl', price: 1395,
    description: "A compact electronic project built around dance-oriented production, digital textures and hyperpop-adjacent songwriting.",
    tracks: ["kissmethroughthephone", "tellmewhy", "alacarte", "rightnext2me", "myflower", "complicated", "ohnono", "moneysallineed", "hunt (wtfdyw)"]
  },

{
    image: "assets/ninja.jpg", alt: "I Love My Computer",
    id: "v45", category: "vinyl", cover: "vinyl", sold: 168,
    sku: "RS-10045", subGenre: "Hyperpop, Alternative Electronic", discs: 1, extra: "",
    title: "I Love My Computer", artist: "Ninajirachi",
    releaseDate: "March 13, 2026", genre: "EDM", label: "NLV Records",
    format: '1LP, 12", Half Blue / Half White Vinyl', price: 2395,
    description: "A futuristic electronic album moving between EDM, tech-house, speed garage, dubstep and hyperpop while exploring technology and digital identity.",
    tracks: ["London Song", "Ipod Touch", "Fuck My Computer", "Csirac", "Delete", "All I Am", "Infohazard", "Battery Death", "Sing Good", "It's You", "All at Once"]
  },

{
    image: "assets/frost.jpg", alt: "SISTER",
    id: "v46", category: "vinyl", cover: "vinyl", sold: 124,
    sku: "RS-10046", subGenre: "Hyperpop, Electropop, Emo Pop", discs: 1, extra: "",
    title: "SISTER", artist: "Frost Children",
    releaseDate: "October 2, 2026", genre: "EDM", label: "True Panther",
    format: '1LP, 12", Blue Swirl Vinyl', price: 1395,
    description: "An energetic electronic-pop record combining festival EDM, hyperpop, emo-influenced songwriting and nostalgic 2010s dance production.",
    tracks: ["Position Famous", "Falling", "Electric", "Control", "Bound2U", "What Is Forever For", "Sister", "Dirty Girl", "Radio (FT. Kim Petras)", "Don't Make Me Cry", "Ralph Lauren (FT. Babymorocco)", "Blue Eyes", "4Me", "Løve"]
  },

{
    image: "assets/aftrr.jpg", alt: "aftrrLife",
    id: "v47", category: "vinyl", cover: "vinyl", sold: 84,
    sku: "RS-10047", subGenre: "Hyperpop, Electroclash, Electropop", discs: 1, extra: "",
    title: "aftrrLife", artist: "aftrr!",
    releaseDate: "May 16, 2025", genre: "EDM", label: "aftrr",
    format: '1LP, 12", Black Vinyl', price: 1395,
    description: "A high-energy electronic project blending hyperpop, electroclash, rage-inspired production and dance music with melodic and emotionally charged songwriting.",
    tracks: ["Somebody Else", "I Reap What I Sow", "On & On", "Limerence", "Requiem", "Hone It In", "Faster", "One Man Army", "Cry", "Hone It In (twilight Remix)", "Faster (rans0m Remix)"]
  },

{
    image: "assets/ayesha.jpg", alt: "precum",
    id: "v48", category: "vinyl", cover: "vinyl", sold: 4,
    sku: "RS-10048", subGenre: "Hyperpop, Electropop, Electroclash", discs: 1, extra: "",
    title: "precum", artist: "Ayesha Erotica",
    releaseDate: "August 11, 2025", genre: "EDM", label: "Ayesha Erotica",
    format: '1LP, 12", Pink Glitter Vinyl', price: 2395,
    description: "An explicit, provocative electronic project built around distorted pop production, club-oriented sounds and Ayesha Erotica's intentionally exaggerated aesthetic.",
    tracks: ["WHORE IDOL", "HOW2FUCK", "STAR 69", "GANG", "BITCH", "GIDDY UP", "RUNAWAY", "MENLO PARK"]
  },
];