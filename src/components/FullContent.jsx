// src/components/FullContent.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { trackProgress } from "../ProgressTracker";
import "./FullContent.css"; // 

function FullContent() {
  const navigate = useNavigate();
  const [scrollPercent, setScrollPercent] = useState(0);

useEffect(() => {
    const phone = localStorage.getItem("userPhone");
    trackProgress(phone, 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="full-content-wrapper">
      <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }} />
      <div className="full-content">

<h1>JINSI YA KUMRIDHISHA MWANAMKE KIMAPENZI</h1>

<p>Na Kumfanya AKUPENDE MILELE Kisa Unamsugua Vilivyo Na CHUMA NDEFU NA NENE</p>

<p>
Kumfikisha mwanamke kileleni na kumfurahisha wakati wa tendo la ndoa siyo tu jambo zuri kwake,<br />
bali pia litakufanya ujivunie uwezo wako wa kumridhisha. Jaribu mbinu hizi ili kuboresha maandalizi<br />
na tendo lenyewe, na hivyo kufanya uzoefu wa ngono kuwa wa ajabu kwa nyote wawili.
</p>

<p>Kwa kumfurahisha kihisia na kimwili, utaimarisha uhusiano wenu kwa kiwango kikubwa!</p>

<p>Kama wewe ni mwanaume ambaye umekuwa ukidhalilika kwa sababu ya kuwahi kumwaga ndani ya dkk 2 tu, basi usiwe na wasiwasi.</p>

<p>Kwani...</p>

<p>
Kama utasoma ujumbe huu hadi mwisho, utaenda kugundua Siri ambayo itakufanya uonekane<br />
mwanaume RIJALI mbele ya mkeo wako kwa kutumia dkk 45 bila kumwaga.
</p>

<p>Na hii itamfanya Afike kileleni na Aridhike...</p>

<p>Ukweli usiofichika Ni Kwamba…</p>

<p>
Ili mwanaume ufike kileleni unahitaji kufikia Threshold value of ejaculation factor<br />
Kama nimekuchanganya vile… Hahahaha Usijari nakufafanulia hapa chini
</p>

<p>Tena kwa mifano ili unielewe</p>

<p>
Threshold value of ejaculation factor Manaake ni kwamba…<br />
Kuna kiwango fulani cha msisimko ambacho kikifikia basi ubongo unaruhusu korodani kutoa manii
</p>

<p>Vp bado nimekuchanganya? Well, safi sana kama umeanza kunipata kdg</p>

<p>Ngoja nikupe mfano hapa chini</p>

<p>
Mfano unachemsha maji na ule mvuke ndio threshold value of ejaculation factor.<br />
Mwanzo wakati umeweka maji jikoni yataanza kuchemka taratibu, na baada ya muda maji yataanza kugeuka mvuke…
</p>

<p>
Yakifikia mvuke — ule mvuke ndio kiwango cha msisimko kinachohitajika.<br />
Manaana yake ni kwamba kuna kipindi cha muda unapokolea hadi mvuke utoke, ndivyo unavyokusanya msisimko kwa muda mrefu.
</p>

<p>
Vilevile msisimko hujikusanya taratibu hadi unafikia kiwango maalum ambacho kikifika — unamwaga.
</p>

<p>
Kwahiyo ikiwa kiwango hicho cha msisimko kitafika kwa haraka → utamwaga haraka.<br />
Ikiwa kitachelewa kufikia → utachelewa kumwaga.
</p>

<p>
Najua kuna swali unajiuliza:<br />
<b>Je, nifanye nini ili kuchelewa kufikia hicho kiwango cha msisimko?</b><br />
Well…. Swali zuri! Na ndio naenda kulijibu hapa chini.
</p>

<p>
Leo takuonesha <b>FOMULA TANO</b> ambazo ukizitumia hata leo — utaona matokeo leoleo:
</p>

<p><b>1. THRUSTING IN & OUT (Kuingiza na Kuchomoa):</b><br />
Unapokaribia kumwaga, chomoa. Ruhusu msisimko upungue. Lakini usimwache mkeo apoe!<br />
Cheza naye sehemu zingine kwa sanaa hadi moto upungue, kisha rudia tena. Ukiweza kutumia hii CODE vizuri,<br />
utamfanya awe mtumwa wa penzi lako.
</p>

<p><b>2. THOUGHT SHIFT METHOD (Kupeleka fikra kwingine):</b><br />
Ukielekeza fikra zako kwenye tendo lenyewe, unamwaga haraka. Badala yake, hesabu namba ngumu kama:<br />
997, 996, 995, 994, 993, 992…..<br />
Hii itapunguza msisimko na kukusaidia uchelewe kumwaga.
</p>

<p><b>3. BREATH CONTROL (Udhibiti wa Pumzi):</b><br />
Pumzi inavyopanda ndivyo msisimko unavyoongezeka.<br />
Pumua polepole, kwa kina. Ukikaribia, vuta pumzi ndefu, shikilia sekunde 3, kisha achia polepole.<br />
Hii inatuliza mapigo ya moyo na inakupa muda zaidi.
</p>

<p><b>4. KUKAZA MISULI YA PC (Pelvic Muscle Control):</b><br />
🧬 PC Muscle ni nini?<br />
Ni misuli ya ndani ya nyonga inayoitwa <i>Pubococcygeus (PC)</i>.<br />
👉 Hii ndiyo misuli unayokaza unapojizuia usikojoe ghafla katikati ya mkojo.<br />
⚠️ Ikiwa hujawahi kuifanyia kazi, itakuwa dhaifu na haifanyi kazi ya kuzuia manii vizuri.
</p>

<p><b>🧠 Kazi ya PC Muscle kwenye Tendo la Ndoa:</b><br />
→ Inasimamia kudhibiti utoaji wa manii<br />
→ Inapokazwa kwa muda sahihi, huweza kuzima kilele kisitokee haraka<br />
→ Inasaidia kuongeza msisimko na kuimarisha uume
</p>

<p><b>🏋️‍♂️ Mazoezi ya PC Muscle – JINSI YA KUFANYA:</b><br />
Tafuta misuli ya PC kwa kujaribu kukatiza mkojo katikati ukiwa chooni.<br />
Hiyo misuli unayotumia — ndiyo unayotakiwa kuifanyia mazoezi.
</p>

<p><b>Zoezi la Msingi:</b><br />
• Kaza misuli hiyo kwa sekunde 5<br />
• Kisha achia kwa sekunde 5<br />
• Rudia mara 10 hadi 15<br />
• Fanya asubuhi na jioni kila siku
</p>

<p><b>Zoezi La Advanced:</b><br />
• Kaza misuli hiyo huku ukipumua polepole<br />
• Jaribu kukaza kwa sekunde 10 hadi 15<br />
• Endelea kupanua uwezo kila wiki
</p>

<p><b>🔥 Wakati wa Tendo – Formula ya Kushinda:</b><br />
Ukihisi unakaribia kumwaga:<br />
→ Kaza PC Muscle haraka na kwa nguvu<br />
→ Usipumue haraka — vuta pumzi ndefu, shikilia, kisha achia taratibu<br />
✅ Hii combo ya kukaza + control ya pumzi inakata msisimko na inakufanya uchelewe kumwaga
</p>

<p><b>🎯 Faida za PC Muscle Exercises kwa mwanaume:</b><br />
1. Uwezo wa kuchelewa kumwaga<br />
2. Kuongeza stamina ya kitandani<br />
3. Kuimarisha uume usisimame kwa muda mfupi tu<br />
4. Kuongeza intensity ya kilele (orgasm)
</p>

<p>
Ukianza leo…<br />
Kwa wiki moja tu unaweza kuona mabadiliko.<br />
Kwa mwezi mmoja – unaweza kuwa bingwa wa chumbani!
</p>

<p><b>🧠 SIRI YA 5: MINDSET & AFFIRMATIONS (Akili ya Ushindi)</b><br />
Ukiingia kitandani na hofu – utashindwa.<br />
Ukiingia kama mfalme – utadhibiti.<br />
👉 Tendo linaanza kichwani, si kwenye chumba.
</p>

<p>
Ukijiaminisha kabla hujamgusa:<br />
“Leo nita-control game hadi mwisho.”<br />
“Nitafikisha mpenzi wangu kileleni kabla sijaachia.”<br />
🧠 Akili yako ikiamini unaweza, uume wako haufanyi mzaha – unatii!
</p>

<p><b>Ukijumlisha hizi SIRI 5:</b><br />
✓ Una control pumzi zako<br />
✓ Unajua lini utoke na kurudi<br />
✓ Una divert fikra zako<br />
✓ Unakaza misuli ya ndani<br />
✓ Unadhibiti hisia zako kama MFALME
</p>

<p><b>Wanaume kama hawa hawakimbiwi — WANATAMANIWA.</b></p>

<p><b>Na kama unataka KIGONGO IMARA</b> — chenye urefu, unene, nguvu, na uwezo wa kurudia bao hadi mara 3-5...</p>

<p>👇 Hii hapa ndiyo njia yako ya kutoka kwenye fedheha ya dakikambili kwenda kuwa bingwa wa dakika 45!</p>

<p><b>CHUKUA HII PROGRAM YA KAYA POWER SASA HIVI!</b></p>

<p>
Dawa za asili zilizotengenezwa kwa vipimo sahihi — kazi yake ni:<br />
✔️ Kutibu madhara ya punyeto ndani ya siku 7<br />
✔️ Kukusaidia uchelewe kufika kileleni<br />
✔️ Kuongeza urefu na unene wa mashine yako<br />
✔️ Kuongeza hamu ya tendo la ndoa<br />
✔️ Kurudia bao 3, 4, 5... bila kuchoka<br />
✔️ Kuimarisha uume legelege<br />
✔️ Kudumu dakika 15 hadi saa nzima huku utamu ukiwa mkali kuliko kawaida!
</p>

<p><b>Usikubali kuwa mwanaume wa kawaida...</b><br />
Kuwa miongoni mwa 20% bora duniani — wanaume wanaotamaniwa na wake zao kila siku!
</p>

<p><b>Program hii itakufaa mshikaji wangu 💯</b></p>

<br />
<div className="cta-button-wrapper">
          <button onClick={() => navigate("/done")}>
Bonyeza Hapa Kupata Offer Ya KAYA POWER      </button>
        </div>
      </div>
    </div>
  );
}

export default FullContent;
