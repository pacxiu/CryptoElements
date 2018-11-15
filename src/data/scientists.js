import React from 'react';
import { Link } from "react-router-dom";

export default [
	{
		id: 1,
		price: null,
		owner: null,
		name: "Unknown Scientist/s",
		description: (<div className="scientist-bio">
			<p>This card is assigned for elements which were discovered but ther is no data about particular person or team. In most cases below Elements were discovered BCE, and there is no data about their discovery.</p>

			<p>Card includes: Egyptians and Sumerians, Chinese, Indian metallurgists, Ancient Chinese and Indians and completely unknown scientists.</p>
		</div>),
		link: "",
		elements: [6, 16, 26, 29, 30, 33, 47, 50, 51, 79, 80]
	},
	{
		id: 2,
		price: null,
		owner: null,
		name: "Joint Institute for Nuclear Research",
		description: (<div className="scientist-bio">
			<p>The Joint Institute for Nuclear Research (JINR), in Dubna, Moscow Oblast, Russia, is an international research center for nuclear sciences, with 5500 staff members, 1200 researchers including 1000 Ph.Ds from eighteen member states (including Armenia, Azerbaijan, Belarus and Kazakhstan). Most scientists, however, are eminent Russian scientists. The Institute has seven laboratories, each with its own specialisation: theoretical physics, high energy physics (particle physics), heavy ion physics, condensed matter physics, nuclear reactions, neutron physics, and information technology. The institute has a division to study radiation and radiobiological research and other ad hoc experimental physics experiments.</p> <p>The Joint Institute for Nuclear Research was established on the basis of an agreement signed on March 26, 1956 in Moscow by representatives of the governments of the eleven founding countries, with a view to combining their scientific and material potential. The USSR contributed 50 percent, the People's Republic of China 20 percent. On February 1, 1957, JINR was registered by the United Nations.</p> <p>At the time of the creation of JINR, the Institute of Nuclear Problems (INP) of the Academy of Sciences of the USSR already existed at the site of the future Dubna since the late 1940s, and it launched a program of fundamental and applied research at the synchrocyclotron. The Electrophysics Laboratory of the Academy of Sciences of the USSR (EFLAN) was established, and under the guidance of Academician Vladimir Veksler, work began to create a new accelerator - a proton synchrophasotron - with a record energy of 10 GeV at that time.</p> <p>By the mid-1950s, there was a worldwide consensus that nuclear science should be accessible and that only broad cooperation could ensure the progressive development of this research, as well as the peaceful use of atomic energy. Thus, in 1954, near CERN, CERN (European Organization for Nuclear Research) was established. At about the same time, the countries that belonged to the socialist community decided to establish a Joint Institute for Nuclear Research on the basis of the INP and EFLAN.</p>
		</div>), 
		link: "https://en.wikipedia.org/wiki/Joint_Institute_for_Nuclear_Research",
		elements: [102, 103, 104, 105, 114, 115, 116, 117, 118]
	},
	{
		id: 3,
		price: null,
		owner: null,
		name: "Lawrence Berkeley National Laboratory",
		description: (<div className="scientist-bio">
			<p>The Lawrence Berkeley National Laboratory (LBNL or LBL), commonly referred to as Berkeley Lab, is a United States national laboratory located in the Berkeley Hills near Berkeley, California that conducts scientific research on behalf of the United States Department of Energy (DOE). It is managed and operated by the University of California. The laboratory overlooks the University of California, Berkeley's main campus.</p> <p>The laboratory was founded in August 26, 1931 by Ernest Lawrence as the Radiation Laboratory of the University of California, Berkeley associated with the Physics Department. It centered physics research around his new instrument, the cyclotron, a type of particle accelerator for which he was awarded the Nobel Prize in Physics in 1939.</p> <p>Throughout the 1930s, Lawrence pushed to create larger and larger machines for physics research, courting private philanthropists for funding. He was the first to develop a large team to build big projects to make discoveries in basic research. Eventually these machines grew too large to be held on the university grounds, and in 1940 the lab moved to its current site atop the hill above campus.</p> <p>After the war, the Radiation Laboratory became one of the first laboratories to be incorporated into the Atomic Energy Commission (AEC) (now Department of Energy, DOE). The most highly classified work remained at Los Alamos, but the RadLab remained involved. Edward Teller suggested setting up a second lab similar to Los Alamos to compete with their designs. This led to the creation of an offshoot of the RadLab outside Livermore, California in 1952. Some of the RadLab's work was transferred to the new lab, but some classified research continued at Berkeley Lab until the 1970s, when it became a laboratory dedicated only to unclassified scientific research.</p> <p>Shortly after the death of Lawrence in August 1958, the UC Radiation Laboratory (both branches) was renamed the Lawrence Radiation Laboratory. The Berkeley location became the Lawrence Berkeley Laboratory in 1971, although many continued to call it the RadLab. Gradually, another shortened form came into common usage, 'LBL'. Its formal name was amended to Ernest Orlando Lawrence Berkeley National Laboratory in 1995, when 'National' was added to the names of all DOE labs. 'Ernest Orlando' was later dropped to shorten the name. Today, the lab is commonly referred to as 'Berkeley Lab'.</p>
		</div>), 
		link: "https://en.wikipedia.org/wiki/Lawrence_Berkeley_National_Laboratory",
		elements: [97, 98, 99, 100, 101, 106]
	},
	{
		id: 4,
		price: null,
		owner: null,
		name: "Gesellschaft für Schwerionenforschung",
		description: (<div className="scientist-bio">
			<p>The GSI Helmholtz Centre for Heavy Ion Research (German: GSI Helmholtzzentrum für Schwerionenforschung) is a federally and state co-funded heavy ion (Schwerion (de)) research center in the Wixhausen suburb of Darmstadt, Germany. It was founded in 1969 as the Society for Heavy Ion Research (German: Gesellschaft für Schwerionenforschung), abbreviated GSI, to conduct research on and with heavy-ion accelerators. It is the only major user research center in the State of Hesse.</p> <p>The laboratory performs basic and applied research in physics and related natural science disciplines. Main fields of study include plasma physics, atomic physics, nuclear structure and reactions research, biophysics and medical research. The lab is a member of the Helmholtz Association of German Research Centres.</p> <p>Shareholders are the German Federal Government (90%) and the State of Hesse, Thuringia and Rhineland-Palatinate. As a member of the Helmholtz Association, the current name was given to the facility on 7 October 2008 in order to bring it sharper national and international awareness.</p>
		</div>), 
		link: "https://en.wikipedia.org/wiki/GSI_Helmholtz_Centre_for_Heavy_Ion_Research",
		elements: [107, 108, 109, 110, 111, 112]
	},
	{
		id: 5,
		price: null,
		owner: null,
		name: "Carl Wilhelm Scheele",
		description: (<div className="scientist-bio">
			<p>Carl Wilhelm Scheele, 9 December 1742 – 21 May 1786) was a Swedish Pomeranian and German pharmaceutical chemist. Isaac Asimov called him "hard-luck Scheele" because he made a number of chemical discoveries before others who are generally given the credit. For example, Scheele discovered <Link to="/elements/8" className="linker">oxygen</Link> (although Joseph Priestley published his findings first), and identified <Link to="/elements/42" className="linker">molybdenum</Link>, <Link to="/elements/74" className="linker">tungsten</Link>, <Link to="/elements/56" className="linker">barium</Link>, <Link to="/elements/1" className="linker">hydrogen</Link>, and <Link to="/elements/17" className="linker">chlorine</Link> before <Link to="/scientists/14" className="linker">Humphry Davy</Link>, among others. Scheele discovered organic acids tartaric, oxalic, uric, lactic, and citric, as well as hydrofluoric, hydrocyanic, and arsenic acids. He preferred speaking German to Swedish his whole life, as German was commonly spoken among Swedish pharmacists.</p>

			<p>Scheele was born in Stralsund, in western Pomerania, which at the time was a Swedish Dominion inside the Holy Roman Empire. Scheele's father Joachim (or Johann) Christian Scheele, was a grain dealer and brewer from a respected German family. His mother was Margaretha Eleanore Warnekros.</p>

			<p>Friends of Scheele's parents taught him the art of reading prescriptions and the meaning of chemical and pharmaceutical signs. Then, in 1757, at age fourteen Carl was sent to Gothenburg as an apprentice pharmacist with another family friend and apothecary. (Martin Andreas Bauch). Scheele retained this position for eight years. During this time he ran experiments late into the night and read the works of Nicolas Lemery, Caspar Neumann, Johann von Löwenstern-Kunckel and Georg Ernst Stahl (the champion of the phlogiston theory). Much of Scheele's later theoretical speculations were based upon Stahl.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Carl_Wilhelm_Scheele",
		elements: [8, 17, 25, 42, 56, 74]
	},
	{
		id: 6,
		price: null,
		owner: null,
		name: "Jöns Jacob Berzelius",
		description: (<div className="scientist-bio">
			<p>Baron Jöns Jacob Berzelius, named by himself and contemporary society as Jacob Berzelius, was a Swedish chemist. Berzelius is considered, along with Robert Boyle, John Dalton, and Antoine Lavoisier, to be one of the founders of modern chemistry.</p>

			<p>Berzelius began his career as a physician but his researches in physical chemistry were of lasting significance in the development of the subject. He is especially noted for his determination of atomic weights; his experiments led to a more complete depiction of the principles of stoichiometry, or the field of chemical combining proportions. In 1803 Berzelius demonstrated the power of an electrochemical cell to decompose chemicals into pairs of electrically opposite constituents.</p>

			<p>Berzelius's work with atomic weights and his theory of electrochemical dualism led to his development of a modern system of chemical formula notation that could portray the composition of any compound both qualitatively (by showing its electrochemically opposing ingredients) and quantitatively (by showing the proportions in which the ingredients were united). His system abbreviated the Latin names of the elements with one or two letters and applied superscripts to designate the number of atoms of each element present in both the acidic and basic ingredients.</p>

			<p>Berzelius himself discovered and isolated several new elements, including <Link to="/elements/58" className="linker">cerium</Link> (1803) and <Link to="/elements/90" className="linker">thorium</Link> (1828). Berzelius’s interest in mineralogy also fostered his analysis and preparation of new compounds of these and other elements. The mineral berzelianite was discovered in 1850 and named after him. He was a strict empiricist and insisted that any new theory be consistent with the sum of chemical knowledge. He developed classical analytical techniques, and investigated isomerism and catalysis, phenomena that owe their names to him. He became a member of the Royal Swedish Academy of Sciences in 1808 and served from 1818 as its principal functionary, the perpetual secretary. He is known in Sweden as "the Father of Swedish Chemistry". Berzelius Day is celebrated on 20 August in honour of him.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/J%C3%B6ns_Jacob_Berzelius",
		elements: [14, 34, 58, 90]
	},
	{
		id: 7,
		price: null,
		owner: null,
		name: "William Ramsay",
		description: (<div className="scientist-bio">
			<p>Sir William Ramsay, 2 October 1852 – 23 July 1916, was a British chemist who discovered the noble gases and received the Nobel Prize in Chemistry in 1904 "in recognition of his services in the discovery of the inert gaseous elements in air" (along with his collaborator, John William Strutt, 3rd Baron Rayleigh, who received the Nobel Prize in Physics that same year for their discovery of <Link to="/elements/18" className="linker">argon</Link>). After the two men identified <Link to="/elements/18" className="linker">argon</Link>, Ramsay investigated other atmospheric gases. His work in isolating <Link to="/elements/18" className="linker">argon</Link>, <Link to="/elements/2" className="linker">helium</Link>, <Link to="/elements/10" className="linker">neon</Link>, <Link to="/elements/36" className="linker">krypton</Link> and <Link to="/elements/54" className="linker">xenon</Link> led to the development of a new section of the periodic table.</p>

			<p>Ramsay was born at 2 Clifton Street in Glasgow on 2 October 1852, the son of civil engineer and surveyor, William C. Ramsay, and his wife, Catherine Robertson. The family lived at 2 Clifton Street in the city centre, a three storey and basement Georgian townhouse. The family moved to 1 Oakvale Place in the Hillhead district in his youth. He was a nephew of the geologist Sir Andrew Ramsay.</p>

			<p>He was educated at Glasgow Academy and then apprenticed to Robert Napier, shipbuilder in Govan. However, he instead decided to study Chemistry University of Glasgow, matriculating in 1866 and graduating 1869. He then undertook practical training with the chemist Thomas Anderson and then went to study in Germany at the University of Tübingen with Wilhelm Rudolph Fittig where his doctoral thesis was entitled Investigations in the Toluic and Nitrotoluic Acids.</p>

			<p>Ramsay went back to Glasgow as Anderson's assistant at the Anderson College. He was appointed as Professor of Chemistry at the University College of Bristol in 1879 and married Margaret Buchanan in 1881. In the same year he became the Principal of University College, Bristol, and somehow managed to combine that with active research both in organic chemistry and on gases.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/William_Ramsay",
		elements: [10, 18, 36, 54]
	},
	{
		id: 8,
		price: null,
		owner: null,
		name: "Glenn T. Seaborg",
		description: (<div className="scientist-bio">
			<p>Glenn Theodore Seaborg, April 19, 1912 – February 25, 1999 was an American chemist whose involvement in the synthesis, discovery and investigation of ten transuranium elements earned him a share of the 1951 Nobel Prize in Chemistry. His work in this area also led to his development of the actinide concept and the arrangement of the actinide series in the <Link to="/periodic" className="linker">periodic table of the elements</Link>.</p>

			<p>Seaborg spent most of his career as an educator and research scientist at the University of California, Berkeley, serving as a professor, and, between 1958 and 1961, as the university's second chancellor. He advised ten US Presidents – from Harry S. Truman to Bill Clinton – on nuclear policy and was Chairman of the United States Atomic Energy Commission from 1961 to 1971, where he pushed for commercial nuclear energy and the peaceful applications of nuclear science.</p>

			<p>Seaborg was the principal or co-discoverer of ten elements: <Link to="/elements/94" className="linker">plutonium</Link>, <Link to="/elements/95" className="linker">americium</Link>, <Link to="/elements/96" className="linker">curium</Link>, <Link to="/elements/97" className="linker">berkelium</Link>, <Link to="/elements/98" className="linker">californium</Link>, <Link to="/elements/99" className="linker">einsteinium</Link>, <Link to="/elements/100" className="linker">fermium</Link>, <Link to="/elements/101" className="linker">mendelevium</Link>, <Link to="/elements/102" className="linker">nobelium</Link> and element 106, which, while he was still living, was named <Link to="/elements/106" className="linker">seaborgium</Link> in his honor. He also discovered more than 100 atomic isotopes and is credited with important contributions to the chemistry of plutonium, originally as part of the Manhattan Project where he developed the extraction process used to isolate the plutonium fuel for the second atomic bomb. Early in his career, he was a pioneer in nuclear medicine and discovered isotopes of elements with important applications in the diagnosis and treatment of diseases, including iodine-131, which is used in the treatment of thyroid disease. In addition to his theoretical work in the development of the actinide concept, which placed the actinide series beneath the lanthanide series on the periodic table, he postulated the existence of super-heavy elements in the transactinide and superactinide series.</p>

			<p>After sharing the 1951 Nobel Prize in Chemistry with <Link to="/scientists/15" className="linker">Edwin McMillan</Link>, he received approximately 50 honorary doctorates and numerous other awards and honors. The list of things named after Seaborg ranges from his chemical element to an asteroid. He was a prolific author, penning numerous books and 500 journal articles, often in collaboration with others. He was once listed in the Guinness Book of World Records as the person with the longest entry in Who's Who in America.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Glenn_T._Seaborg",
		elements: [94, 95, 96]
	},
	{
		id: 9,
		price: null,
		owner: null,
		name: "Carl Auer von Welsbach",
		description: (<div className="scientist-bio">
			<p>Carl Auer von Welsbach, also known as Carl Auer, Freiherr von Welsbach (1 September 1858 – 4 August 1929) was an Austrian scientist and inventor, who had a talent not only for discovering advances, but also for turning them into commercially successful products. He is particularly well known for his work on rare-earth elements, which led to the development of the flint used in modern lighters, the gas mantle, which brought light to the streets of Europe in the late 19th century, and for the development of the metal-filament light bulb.</p>
			<p>Carl Auer was born in Vienna on 1 September 1858 to Therese and Alois Auer. Alois, ennobled in 1860, was director of the Imperial printing office (K.-k. Hof- und Staatsdruckerei) in the days of the Austrian Empire. Carl went to high schools in Mariahilf and Josefstadt. After leaving school in 1877, he joined the Austro-Hungarian Army and was commissioned as a Second Lieutenant.</p>

			<p>In 1878 Auer entered the University of Vienna, studying mathematics, general chemistry, engineering physics, and thermodynamics. He then moved to the University of Heidelberg in 1880, where he continued his studies in chemistry under the direction of Robert Bunsen (inventor of the Bunsen burner). In 1882 he received his degree of Ph.D. and returned to Vienna to work as an unpaid assistant in Prof. Adolf Lieben's laboratory, working with chemical separation methods for investigations on rare-earth elements.</p>

			<p>In 1885, Von Welsbach used a method that he developed himself to separate the alloy didymium into its two parts for the first time. He saw several differently colored versions, which he named <Link to="/elements/59" className="linker">"praseodymium"</Link> (green) and "neodidymium" (pink); the latter then became the more common name for the element <Link to="/elements/60" className="linker">"neodymium"</Link>.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Carl_Auer_von_Welsbach",
		elements: [59, 60, 71]
	},
	{
		id: 10,
		price: null,
		owner: null,
		name: "Carl Gustaf Mosander",
		description: (<div className="scientist-bio">
			<p>Carl Gustaf Mosander (10 September 1797 – 15 October 1858) was a Swedish chemist. He discovered the elements <Link to="/elements/57" className="linker">lanthanum</Link>, <Link to="/elements/68" className="linker">erbium</Link> and <Link to="/elements/65" className="linker">terbium</Link>.</p>

			<p>Born in Kalmar, Mosander attended school there until he moved to Stockholm with his mother at age 12. In Stockholm, he became an apprentice at the Ugglan pharmacy. He took his pharmacy examination in 1817, but had an interest in medicine and matriculated as a student in the Karolinska Institute in 1820 and graduated with his Master of Surgery degree in 1824.</p>

			<p>Mosander worked teaching chemistry at the Institute and as an assistant in the mineralogical collection of the Swedish Museum of Natural History. In 1836 he succeeded his professor of chemistry during his medical studies, <Link to="/scientists/6" className="linker">Jöns Jakob Berzelius</Link>, as professor of chemistry and pharmacy in the Karolinska Institute. Mosander discovered lanthanum in 1839 when he partially decomposed a sample of cerium nitrate by heating and treating the resulting salt with dilute nitric acid. In 1843 he discovered <Link to="/elements/65" className="linker">terbium</Link> and <Link to="/elements/68" className="linker">erbium</Link>. Mosander was elected a member of the Royal Swedish Academy of Sciences in 1833.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Carl_Gustaf_Mosander",
		elements: [57, 65, 68]
	},
	{
		id: 11,
		price: null,
		owner: null,
		name: "Emilio Segrè",
		description: (<div className="scientist-bio">
			<p>Emilio Gino Segrè (1 February 1905 – 22 April 1989) was an Italian-American physicist and Nobel laureate, who discovered the elements <Link to="/elements/43" className="linker">technetium</Link> and <Link to="/elements/85" className="linker">astatine</Link>, and the antiproton, a subatomic antiparticle, for which he was awarded the Nobel Prize in Physics in 1959. From 1943 to 1946 he worked at the Los Alamos National Laboratory as a group leader for the Manhattan Project. He found in April 1944 that Thin Man, the proposed <Link to="/elements/94" className="linker">plutonium</Link> gun-type nuclear weapon, would not work because of the presence of plutonium-240 impurities.</p>

			<p>Born in Tivoli, near Rome, Segrè studied engineering at the University of Rome La Sapienza before taking up physics in 1927. Segrè was appointed assistant professor of physics at the University of Rome in 1932 and worked there until 1936, becoming one of the Via Panisperna boys. From 1936 to 1938 he was director of the Physics Laboratory at the University of Palermo. After a visit to Ernest <Link to="/scientists/3" className="linker">O. Lawrence's Berkeley Radiation Laboratory</Link>, he was sent a <Link to="/elements/42" className="linker">molybdenum</Link> strip from the laboratory's cyclotron deflector in 1937, which was emitting anomalous forms of radioactivity. After careful chemical and theoretical analysis, Segrè was able to prove that some of the radiation was being produced by a previously unknown element, named <Link to="/elements/43" className="linker">technetium</Link>, which was the first artificially synthesized chemical element that does not occur in nature.</p>

			<p>In 1944, he became a naturalized citizen of the United States. On his return to Berkeley in 1946, he became a professor of physics and of history of science, serving until 1972. Segrè and Owen Chamberlain were co-heads of a research group at the <Link to="/scientists/3" className="linker">Lawrence Radiation Laboratory</Link> that discovered the antiproton, for which the two shared the 1959 Nobel Prize in Physics.</p>

			<p>Segrè was also active as a photographer and took many photos documenting events and people in the history of modern science, which were donated to the American Institute of Physics after his death. The American Institute of Physics named its photographic archive of physics history in his honor.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Emilio_Segr%C3%A8",
		elements: [43, 61, 85]
	},
	{
		id: 12,
		price: null,
		owner: null,
		name: "Martin Heinrich Klaproth",
		description: (<div className="scientist-bio">
			<p>Martin Heinrich Klaproth (1 December 1743 – 1 January 1817) was a German chemist who discovered <Link to="/elements/92" className="linker">uranium</Link> (1789), <Link to="/elements/40" className="linker">zirconium</Link> (1789), and <Link to="/elements/58" className="linker">cerium</Link> (1803), and named <Link to="/elements/22" className="linker">titanium</Link> (1795) and <Link to="/elements/52" className="linker">tellurium</Link> (1798).</p>

			<p>Klaproth was born in Wernigerode. During a large portion of his life he followed the profession of an apothecary. After acting as assistant in pharmacies at Quedlinburg, Hanover, Berlin and Danzig successively he came to Berlin on the death of Valentin Rose the Elder in 1771 as manager of his business, and in 1780 he started an establishment on his own account in the same city, where from 1782 he was pharmaceutical assessor of the Ober-Collegium Medicum. In 1787 he was appointed lecturer in chemistry to the Prussian Royal Artillery, and when the university was founded in 1810 he was selected to be the professor of chemistry. He died in Berlin on New Year's Day in 1817. Klaproth was the leading chemist of his time in Germany.</p>

			<p>An exact and conscientious worker, he did much to improve and systematise the processes of analytical chemistry and mineralogy, and his appreciation of the value of quantitative methods led him to become one of the earliest adherents of the Lavoisierian doctrines outside France. Klaproth found the element <Link to="/elements/22" className="linker">titanium</Link> in the ore rutile in 1791, believing it to be a new discovery, however, William Gregor is credited with the discovery of <Link to="/elements/22" className="linker">titanium</Link>, having found the metal in a different ore, (ilmenite), before Klaproth, although in the same year. He was the first to discover <Link to="/elements/92" className="linker">uranium</Link> while studying the mineral pitchblende. In addition, he discovered <Link to="/elements/40" className="linker">zirconium</Link>, and characterised <Link to="/elements/92" className="linker">uranium</Link> and <Link to="/elements/40" className="linker">zirconium</Link> as distinct elements.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Martin_Heinrich_Klaproth",
		elements: [40, 92]
	},
	{
		id: 13,
		price: null,
		owner: null,
		name: "Lecoq de Boisbaudran",
		description: (<div className="scientist-bio">
			<p>Paul-Émile Lecoq de Boisbaudran, also called François Lecoq de Boisbaudran (18 April 1838 – 28 May 1912), was a French chemist known for his discoveries of the chemical elements <Link to="/elements/31" className="linker">gallium</Link>, <Link to="/elements/62" className="linker">samarium</Link> and <Link to="/elements/66" className="linker">dysprosium</Link>.</p>

			<p>De Boisbaudran belonged to the ancient Protestant nobility of considerable fortune, which, however, disappeared after the revocation of the Edict of Nantes. The property of de Boisbaudran was sold, and his father Paul started a wine business at Cognac. The venture required the energy of the entire family, including young Lecoq. His mother was well educated and taught him history and foreign languages, so he was fluent in English. He also studied some courses of the École Polytechnique by reading the syllabus and fitted up a modest laboratory, where he began to repeat the experiments that he had read in books. In this laboratory he made most of his early discoveries, including the isolation of <Link to="/elements/31" className="linker">gallium</Link>.</p>

			<p>Lecoq contributed more to the development of the periodic classification of elements by proposing, soon after its discovery, that <Link to="/elements/18" className="linker">argon</Link> was a member of a new, previously unsuspected, chemical series of elements, later to become known as the noble gases. After 1895, family duties and failing health hindered his work. He suffered from ankylosis of the joints and died in 1912, at the age of 74</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Paul-%C3%89mile_Lecoq_de_Boisbaudran",
		elements: [31, 62, 66]
	},
	{
		id: 14,
		price: null,
		owner: null,
		name: "Humphry Davy",
		description: (<div className="scientist-bio">
			<p>Sir Humphry Davy, 1st Baronet (17 December 1778 – 29 May 1829) was a Cornish chemist and inventor, who is best remembered today for isolating a series of substances for the first time: <Link to="/elements/19" className="linker">potassium</Link> and <Link to="/elements/11" className="linker">sodium</Link> in 1807 and <Link to="/elements/20" className="linker">calcium</Link>, <Link to="/elements/38" className="linker">strontium</Link>, <Link to="/elements/56" className="linker">barium</Link>, <Link to="/elements/12" className="linker">magnesium</Link> and <Link to="/elements/5" className="linker">boron</Link> the following year, as well as discovering the elemental nature of <Link to="/elements/17" className="linker">chlorine</Link> and <Link to="/elements/53" className="linker">iodine</Link>. He also studied the forces involved in these separations, inventing the new field of electrochemistry. In 1799 Davy experimented with nitrous oxide and became astonished that it made him laugh, so he nicknamed it "laughing gas", and wrote about its potential anaesthetic properties in relieving pain during surgery.</p>

			<p>Davy was born in Penzance, Cornwall in England on 17 December 1778. Davy's brother, John Davy, writes that the society of their hometown was characterised by "an almost unbounded credulity respecting the supernatural and monstrous</p>

			<p>In 1802, Humphry Davy had what was then, the most powerful electrical battery in the world at the Royal Institution. With it, Davy created the first incandescent light by passing electric current through a thin strip of platinum, chosen because the metal had an extremely high melting point. It was neither sufficiently bright nor long lasting enough to be of practical use, but demonstrated the principle. By 1806 he was able to demonstrate a much more powerful form of electric lighting to the Royal Society in London. It was an early form of arc light which produced its illumination from an electric arc created between two charcoal rods.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Humphry_Davy",
		elements: [11, 19, 20]
	},
	{
		id: 15,
		price: null,
		owner: null,
		name: "Edwin McMillan",
		description: (<div className="scientist-bio">
			<p>Edwin Mattison McMillan (September 18, 1907 – September 7, 1991) was an American physicist and Nobel laureate credited with being the first-ever to produce a transuranium element, <Link to="/elements/93" className="linker">neptunium</Link>. For this, he shared the Nobel Prize in Chemistry with <Link to="/scientists/8" className="linker">Glenn Seaborg</Link> in 1951.</p>

			<p>McMillan was born in Redondo Beach, California, on September 18, 1907, the son of Edwin Harbaugh McMillan and his wife Anna Marie McMillan née Mattison. He had a younger sister, Catherine Helen. His father was a physician, as was his father's twin brother, and three of his mother's brothers.</p>

			<p>A graduate of California Institute of Technology, he earned his doctorate from Princeton University in 1933, and joined the <Link to="/scientists/3" className="linker">Berkeley Radiation Laboratory</Link>, where he discovered oxygen-15 and beryllium-10. During World War II, he worked on microwave radar at the MIT Radiation Laboratory, and on sonar at the Navy Radio and Sound Laboratory. In 1942 he joined the Manhattan Project, the wartime effort to create atomic bombs, and helped establish the project's Los Alamos Laboratory where the bombs were designed. He led teams working on the gun-type nuclear weapon design, and also participated in the development of the implosion-type nuclear weapon.</p>

			<p>McMillan co-invented the synchrotron with Vladimir Veksler. He returned to the <Link to="/scientists/3" className="linker">Radiation Laboratory</Link> after the war, and built them. In 1954 he was appointed associate director of the Radiation Laboratory, being promoted to deputy director in 1958. On the death of Lawrence that year, he became director, and he stayed in that position until his retirement in 1973.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Edwin_McMillan",
		elements: [93]
	},
	{
		id: 16,
		price: null,
		owner: null,
		name: "Pierre and Marie Curie",
		description: (<div className="scientist-bio">
			<p>Marie Skłodowska Curie (7 November 1867 – 4 July 1934) was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and only woman to win twice, the only person to win a Nobel Prize in two different sciences, and was part of the Curie family legacy of five Nobel Prizes. She was also the first woman to become a professor at the University of Paris, and in 1995 became the first woman to be entombed on her own merits in the Panthéon in Paris.</p>

			<p>Her achievements included the development of the theory of radioactivity, techniques for isolating radioactive isotopes, and the discovery of two elements, <Link to="/elements/84" className="linker">polonium</Link> and <Link to="/elements/88" className="linker">radium</Link>. Under her direction, the world's first studies into the treatment of neoplasms were conducted using radioactive isotopes. She founded the Curie Institutes in Paris and in Warsaw, which remain major centres of medical research today. During World War I, she developed mobile radiography units to provide X-ray services to field hospitals.</p>

			<p>While a French citizen, Marie Skłodowska Curie, who used both surnames, never lost her sense of Polish identity. She taught her daughters the Polish language and took them on visits to Poland. She named the first chemical element that she discovered‍ —‌ <Link to="/elements/84" className="linker">polonium</Link>, which she isolated in 1898‍ after her native country.</p>

			<p>For more information visit <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Marie_Curie" className="linker">Wikipedia - Marie Curie</a>.</p>
			
			<p>Pierre Curie (15 May 1859 – 19 April 1906) was a French physicist, a pioneer in crystallography, magnetism, piezoelectricity and radioactivity. In 1903 he received the Nobel Prize in Physics with his wife, Marie Skłodowska-Curie, and Henri Becquerel, "in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel".</p>

			<p>Prior to his famous doctoral studies on magnetism, he designed and perfected an extremely sensitive torsion balance for measuring magnetic coefficients. Variations on this equipment were commonly used by future workers in that area. Pierre Curie studied ferromagnetism, paramagnetism, and diamagnetism for his doctoral thesis, and discovered the effect of temperature on paramagnetism which is now known as Curie's law. The material constant in Curie's law is known as the Curie constant. He also discovered that ferromagnetic substances exhibited a critical temperature transition, above which the substances lost their ferromagnetic behavior. This is now known as the Curie temperature. The Curie temperature is used to study plate tectonics, treat hypothermia, measure caffeine, and to understand extraterrestrial magnetic fields.</p>

			<p>For more information visit <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Pierre_Curie" className="linker">Wikipedia - Pierre Curie</a>.</p>
		</div>),
		link: "",
		elements: [84, 88]
	},
	{
		id: 17,
		price: null,
		owner: null,
		name: "Smithson Tennant",
		description: (<div className="scientist-bio">
			<p>Smithson Tennant (30 November 1761 – 22 February 1815) was an English chemist. Tennant is best known for his discovery of the elements <Link to="/elements/77" className="linker">iridium</Link> and <Link to="/elements/76" className="linker">osmium</Link>, which he found in the residues from the solution of platinum ores in 1803. He also contributed to the proof of the identity of diamond and charcoal. The mineral tennantite is named after him.</p>

			<p>Tennant was born in Selby in Yorkshire. His father was Calvert Tennant (named after his grandmother Phyllis Calvert, a granddaughter of Cecilius Calvert, 2nd Baron Baltimore). His own name derives from his grandmother Rebecca Smithson, widow of Joshua Hitchling. He attended Beverley Grammar School and there is a plaque over one of the entrances to the present school commemorating his discovery of the two elements, <Link to="/elements/76" className="linker">osmium</Link> and <Link to="/elements/77" className="linker">iridium</Link>. He began to study medicine at Edinburgh in 1781, but after a few months moved to Cambridge, where he devoted himself to botany and chemistry. He graduated M.D. at Cambridge in 1796 and about the same time purchased an estate near Cheddar, where he carried out agricultural experiments. He was appointed professor of chemistry at Cambridge in 1813, but lived to deliver only one course of lectures, being killed near Boulogne-sur-Mer by the fall of a bridge over which he was riding.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Smithson_Tennant",
		elements: [76, 77]
	},
	{
		id: 18,
		price: null,
		owner: null,
		name: "Jean Charles Galissard de Marignac",
		description: (<div className="scientist-bio">
			<p>Jean Charles Galissard de Marignac (24 April 1817 – 15 April 1894) was a Swiss chemist whose work with atomic weights suggested the possibility of isotopes and the packing fraction of nuclei and whose study of the rare earth elements led to his discovery of <Link to="/elements/70" className="linker">ytterbium</Link> in 1878 and co-discovery of <Link to="/elements/64" className="linker">gadolinium</Link> in 1880.</p>

			<p>Born in Geneva, he was twenty-one years old when he began to attend the École polytechnique in Paris, and from 1837 to 1839 studied at the École des mines. Then, after a short time in Liebig's laboratory at Gießen, and in the Sèvres porcelain factory, he became in 1841 a professor of chemistry at the academy of Geneva. In 1845 he was appointed professor of mineralogy also, and held both chairs until 1878, when ill-health obliged him to resign. He died at Geneva.</p>

			<p>Marignac's name is well known for the careful and exact determinations of atomic weights which he carried out for fifty-seven of the elements. In undertaking this work he had, like J. S. Stas, the purpose of testing Prout's hypothesis, but he remained more disposed than the Belgian chemist to consider the possibility that it may have some degree of validity. Throughout his life he paid great attention to the rare earths and the problem of separating and distinguishing them; in 1878 he extracted <Link to="/elements/70" className="linker">ytterbium</Link> from what was supposed to be pure erbia, and two years later found <Link to="/elements/64" className="linker">gadolinium</Link> and <Link to="/elements/62" className="linker">samarium</Link> in the samarskite earths.</p>

			<p>In 1858 he pointed out the isomorphism of the fluostannates and the fluosilicates, thus settling the then vexed question of the composition of silicic acid; and subsequently he studied the fluorides of <Link to="/elements/40" className="linker">zirconium</Link>, <Link to="/elements/5" className="linker">boron</Link>, <Link to="/elements/74" className="linker">tungsten</Link>, and other elements. He prepared silicotungstic acid, one of the first examples of the complex inorganic acids. Marignac discovered that <Link to="/elements/41" className="linker">niobium</Link> and <Link to="/elements/73" className="linker">tantalum</Link> could be separated by fractional crystallization separation of potassium heptafluorotantalate from potassium oxypentafluoroniobate monohydrate, a process which was used commercially until displaced by solvent extraction separation of the same fluorides starting in the 1950s.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Jean_Charles_Galissard_de_Marignac",
		elements: [64, 70]
	},
	{
		id: 19,
		price: null,
		owner: null,
		name: "William Hyde Wollaston",
		description: (<div className="scientist-bio">
			<p>William Hyde Wollaston (6 August 1766 – 22 December 1828) was an English chemist and physicist who is famous for discovering the chemical elements <Link to="/elements/46" className="linker">palladium</Link> and <Link to="/elements/45" className="linker">rhodium</Link>. He also developed a way to process platinum ore into malleable ingots.</p>

			<p>Wollaston was born in East Dereham, Norfolk, the son of the priest-astronomer Francis Wollaston (1737–1815) and his wife Althea Hyde. The family, which included 17 children, was financially well-off and were part of an intellectually stimulating environment. Wollaston was educated at Charterhouse School and Gonville and Caius College, Cambridge: in 1793 he obtained a doctorate in medicine from Cambridge University, and was a fellow of his college from 1787 to 1828.</p>

			<p>He worked as a physician in rural areas between 1793 and 1797, then moved to London. During his studies, Wollaston had become interested in chemistry, crystallography, metallurgy and physics. In 1800, after he had received a large sum of money from one of his older brothers, he left medicine. He concentrated on pursuing his interests in chemistry and other subjects outside his trained vocation.</p>

			<p>After having established a partnership with <Link to="/scientists/17" className="linker">Smithson Tennant</Link> in 1800 in order to produce and sell chemical products, Wollaston became wealthy by developing the first physico-chemical method for processing platinum ore in practical quantities. He held the details of the process secret until near his death and made huge profits for about 20 years by being the only supplier in England of the product which had many of the same qualities as gold, but was much cheaper.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/William_Hyde_Wollaston",
		elements: [45, 46]
	},
	{
		id: 20,
		price: null,
		owner: null,
		name: "Robert Bunsen and Gustav Kirchhoff",
		description: (<div className="scientist-bio">
			<p>Robert Wilhelm Eberhard Bunsen (30 March 1811 – 16 August 1899) was a German chemist. He investigated emission spectra of heated elements, and discovered <Link to="/elements/55" className="linker">caesium</Link> (in 1860) and <Link to="/elements/37" className="linker">rubidium</Link> (in 1861) with the physicist Gustav Kirchhoff. Bunsen developed several gas-analytical methods, was a pioneer in photochemistry, and did early work in the field of organoarsenic chemistry. With his laboratory assistant, Peter Desaga, he developed the Bunsen burner, an improvement on the laboratory burners then in use. The Bunsen–Kirchhoff Award for spectroscopy is named after Bunsen and Kirchhoff.</p>

			<p>In 1833 Bunsen became a lecturer at Göttingen and began experimental studies of the (in)solubility of metal salts of arsenous acid. His discovery of the use of iron oxide hydrate as a precipitating agent is still today the most effective antidote against arsenic poisoning. This interdisciplinary research was carried on and published in conjunction with the physician Arnold Adolph Berthold. In 1836, Bunsen succeeded Friedrich Wöhler at the Polytechnic School of Kassel (German: Baugewerkschule Kassel). Bunsen taught there for three years, and then accepted an associate professorship at the University of Marburg, where he continued his studies on cacodyl derivatives. He was promoted to full professorship in 1841. While at University of Marburg, Bunsen participated in the 1846 expedition for the investigation of Iceland's volcanoes.</p>

			<p>For more information visit <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Robert_Bunsen" className="linker">Wikipedia - Robert Bunsen</a>.</p>

			<p>Gustav Robert Kirchhoff (12 March 1824 – 17 October 1887) was a German physicist who contributed to the fundamental understanding of electrical circuits, spectroscopy, and the emission of black-body radiation by heated objects. He coined the term black-body radiation in 1862, and at least two different sets of concepts are named "Kirchhoff's laws" after him. The Bunsen–Kirchhoff Award for spectroscopy is named after him and his colleague, Robert Bunsen.</p>

			<p>Kirchhoff formulated his circuit laws, which are now ubiquitous in electrical engineering, in 1845, while still a student. He completed this study as a seminar exercise; it later became his doctoral dissertation. In 1857 he calculated that an electric signal in a resistanceless wire travels along the wire at the speed of light. He proposed his law of thermal radiation in 1859, and gave a proof in 1861. He was called to the University of Heidelberg in 1854, where he collaborated in spectroscopic work with Robert Bunsen. Together Kirchhoff and Bunsen discovered <Link to="/elements/55" className="linker">caesium</Link> and <Link to="/elements/37" className="linker">rubidium</Link> in 1861. At Heidelberg he ran a mathematico-physical seminar, modelled on Neumann's, with the mathematician Leo Koenigsberger. Among those who attended this seminar were Arthur Schuster and Sofia Kovalevskaya. In 1875 Kirchhoff accepted the first chair specifically dedicated to theoretical physics at Berlin.</p>

			<p>For more information visit <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Gustav_Kirchhoff" className="linker">Wikipedia - Gustav Kirchhoff</a>.</p>
		</div>),
		link: "",
		elements: [37, 55]
	},
	{
		id: 21,
		price: null,
		owner: null,
		name: "Louis Nicolas Vauquelin",
		description: (<div className="scientist-bio">
			<p>Louis Nicolas Vauquelin (16 May 1763 – 14 November 1829) was a French pharmacist and chemist.</p>

			<p>Vauquelin was born at Saint-André-d'Hébertot in Normandy, France. His first acquaintance with chemistry was gained as laboratory assistant to an apothecary in Rouen (1777–1779), and after various vicissitudes he obtained an introduction to A. F. Fourcroy, in whose laboratory he was an assistant from 1783 to 1791.</p>

			<p>At first his work appeared as that of his master and patron, then in their joint names; in 1790 he began to publish on his own, and between that year and 1833 his name is associated with 376 papers. Most of these were simple records of patient and laborious analytical operations, and it is perhaps surprising that among all the substances he analysed he only detected two new elements, <Link to="/elements/4" className="linker">beryllium</Link> in 1798 in beryl and <Link to="/elements/24" className="linker">chromium</Link> in 1797 in a red lead ore from Siberia. He also managed to get liquid ammonia at atmospheric pressure. Later with Fourcroy, he identified a metal in a platinum residue they called ‘ptène, This name ‘ptene’ or ‘ptène’ was reported as an early synonym for <Link to="/elements/76" className="linker">osmium</Link>.</p>
		</div>),
		link: "https://en.wikipedia.org/wiki/Louis_Nicolas_Vauquelin",
		elements: [4, 24]
	}
];