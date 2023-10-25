"use strict"

const djp = []
const dicewareJP = []

djp[1] = '0123456789abcdefghijklmnopqrstuvwxyz'
djp[2] = '101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899aaabacadaeafagahaiajakalamanaoapaqarasatauavawaxayazbbbcbdbebfbgbhbibjbkblbmbnbobpbqbrbsbtbubvbwbxbybzcbcccdcecfcgchcicjckclcmcncocpcqcrcsctcucvcwcxcyczdbdcdddedfdgdhdidjdkdldmdndodpdqdrdsdtdudvdwdxdydzebecedeeefegeheiejekelemeneoepeqereseteuevewexeyezfbfcfdfefffgfhfifjfkflfmfnfofpfqfrfsftfufvfwfxfyfzgbgcgdgegfggghgigjgkglgmgngogpgqgrgsgtgugvgwgxgygzhbhchdhehfhghhhihjhkhlhmhnhohphqhrhshthuhvhwhxhyhzibicidieifigihiiijikiliminioipiqirisitiuiviwixiyizjbjcjdjejfjgjhjijjjkjljmjnjojpjqjrjsjtjujvjwjxjyjzkbkckdkekfkgkhkikjkkklkmknkokpkqkrksktkukvkwkxkykzlblcldlelflglhliljlklllmlnlolplqlrlsltlulvlwlxlylzmbmcmdmemfmgmhmimjmkmlmmmnmompmqmrmsmtmumvmwmxmymznbncndnenfngnhninjnknlnmnnnonpnqnrnsntnunvnwnxnynzobocodoeofogohoiojokolomonooopoqorosotouovowoxoyozpbpcpdpepfpgphpipjpkplpmpnpopppqprpsptpupvpwpxpypzqbqcqdqeqfqgqhqiqjqkqlqmqnqoqpqqqrqsqtquqvqwqxqyqzrbrcrdrerfrgrhrirjrkrlrmrnrorprqrrrsrtrurvrwrxryrzsbscsdsesfsgshsisjskslsmsnsospsqsrssstsusvswsxsysztbtctdtetftgthtitjtktltmtntotptqtrtstttutvtwtxtytzubucudueufuguhuiujukulumunuoupuqurusutuuuvuwuxuyuzvbvcvdvevfvgvhvivjvkvlvmvnvovpvqvrvsvtvuvvvwvxvyvzwbwcwdwewfwgwhwiwjwkwlwmwnwowpwqwrwswtwuwvwwwxwywzxbxcxdxexfxgxhxixjxkxlxmxnxoxpxqxrxsxtxuxvxwxxxyxzybycydyeyfygyhyiyjykylymynyoypyqyrysytyuyvywyxyyzbzczdzezfzgzhzizjzkzlzmznzozpzqzrzsztzuzvzwzxzyzz'
djp[3] = '100101111123200222234300333345400444456500555567600666678700777789800888900999aaaabcaenageagoahoajiakaakeakiakoakuamaameamiamoamuanaaneanianoaoiaraareariaruasaaseasuateatoawaazabaibanbbbbcdbenbinbonboubuibunccccdechachichodaidanddddefdondouebiedaedoeeeefgekiemierieruesaffffghfuefuifunfuugaigangeigengggghigingoigougunhaehaihanhauheihenhhhhiehijhinhonhoohouianidoieiigeigiigoiieiiiiinijiijkikaikeikiikuimaimiimoinaineinuiouiriiroiruisoisuitaitoiwaiyajaajiijinjjjjkljoujunjuukaekaikankaokaukeikenkiikinkkkklmkoekoikonkoukuikunkuullllmnmaamaemaimanmaumeimenmiemmmmnomonmoumuunaenainannaondandeneenenninnnnnopnounuuobaobiogiojiokaokeokiokuomooneoniooiooooouopqoreorioruosaosuotoouioyappppqrqqqqrsrairanreirenrinrourrrrstruisaasaesaisansaosauseisenshashishoshusonsousssstusuesuisuutaitanteitentoitontootoutsuttettttuvubaudeuhaujiukeukiukuumaumeumiumuurauriuruusoutauunuuuuvwuzuvvvvwxwanwwwwxyxxxxyzyaeyoiyonyouyuuyyyzaizenzoizouzzz'
djp[4] = '10001111123415001600170018001900191019201925193019351940194519501955196019651970197519801985199019911992199319941995199619971998199920002001200220032004200520062007200820092010201520202030203520402045205022222345246830003333345640004321444445675000555556786000666667897000777780008888900098769999aaaaachiaeteahouaidaaigoaimaaisoaisuaiteaizuakaiakkaakkeakuiamaeamaiandaanjiankaankiankoanmaannaanneannianouanpianpoanzuaobaaoguaokiaoruaraiarauasaiashiataiattebaaibababaiubakabakubanebarabaribbbbbenibijobikabiwabokebokuboyabuaibufubuinbujibukabukiburibusubutabyouccccchanchiechiichinchouchuudagadahadaiidakadakedakudamedanodaredaridarodasudatedatodddddeaideaudehademoderudesudoaidobudokidokodokudomadomodonodoredorodotedouidukieeeeeetoegaoehoneieneigaeigoeijieikieirieiwaeiyoenbuengiengoenjienjoenkaenkiensoeraiettofffffuanfubifubofudafudefujifujofukafukufumifumufunefuonfurifurofurufusafusefutafutofuunfuyofuyugakagakegakugaragasugatagawagekagekigenigerigetageyagggggiangibogidagifugigigihigiingijigimugiongirigobugoeigogogojigojogokigokugomigomugorogosagotegotogouigouugozaguaigyougyuuhabahadahadehagehagihaguhahahajihakahakihakohakuhamahamehanahaneharaharehariharuhasuhatahatehatohayahazuhebiheguhekihemiheruhesohetaheyahhhhhiaihibihifuhigehijihikihikuhimahimehimohinahiruhitohiwahiyuhizahoanhobohodohogohohohojihojohokahonehoonhorahorihoruhosahosuhouihozohyouibunichiidaiidenidouiedeigaiigenigonihanihenihinihouiiiiiiyaijinijouijuuikanikenikkaikkeikkiikkoikoiikouimeiimininaiingainininkiioriippaippiippoiraeiraiireiironiruiisaniseiishaishiishoisonisouisseissoitaiitanitenitsuitteiwaiiwaoiwauiyouizenizonjakujamajarijiaijibajieijifujigajigojihijiinjijijijojikajikijikojikujimijimujisajisujitajjjjjoenjojijojojooujouijujujukujurijuuijuyokabekabikabukadokaenkafukagekagikagokagukahikaiikainkajikajukakekakikakokakukamakamekamikamokamukanakanekanikanokaoukarakarekarikarukasakasokasukatakatokawakayakayukazekazukebukedokegakeiikemukerukesakesuketakiaikibakibokidokieikifukigakigikigokigukiinkijikikakikikikukimekimikimokinukioikionkirekirikirokirukisokisukitakitokiunkiyokizakizukkkkkobukogukojikokokokukomakomekomukonakonokooukorekorokorukosokosukotokouikouukoyakozokubikudakufukugikujikujokukikukukumakumikumokumukunikurakurekurikurokurukusakusekuwakuzukyoukyuullllmadamademadomafumagomahimajomakemakimakumamamamemanemaremarumasumatamatomauemayumazumedomekumememesumeuemiaimigimikimimiminaminemirumisemisomizomizummmmmogimogumojimomomomumonomorimorumosumotemotomouimudamuenmugimujimukemukimukomukumunemuramuremurimusomusumyounabenadanadonagenakanakinakunamanaminanananinaranarenarinarunasunawanazenazoneginekonerinerunetanezuniainiaunibunidonigeniinnijinikinikuninoninunioiniouniruniseniteniwannnnnobenobinodanodenodonokinokunominomunoninorinorunugunukinukunumanunonurunyouoboeochaochiodenoeruoimeoiruoiteokanomaeomaiomeeomeiomoiomouonbuondoonnaonwaoobaoodeoogioojioonoooooooteooyaoreiosaeosaiosanosenoshiosoiosouosuiotsuottooubooudaouenougiouhioujaoujioujoouteouzappoippppqqqqraiurakurekirijirikarikurojirokurrrrrusuryouryuusabisagisahasajisakasakesakisakusamasanasanesarasarusasasasusatesawasazoseiisekisemesemiseouserusetosewashaishinshioshoushuishunshuusoansobasobosobusodesoensofusokosokusomesonosorasoresorusotosouisssssugisugusuiisujisukisukusumasumisumusunasunesurasurisurususosuyusuzutabatabitadatahataiitakataketakitakotakutamatametamitanatanetanitarataretaritarutasutatetauetazutekitematemoteraterutobutoeitogetogitogutohatohotokatokitokotokutomitomotomutooitoratoritorotorutouatowatsuetsuitsuuttttubauuchiudonuekiuenoueruugaiumaiumouungaunkounyuushiusuiutauutenutsuuuuuuwanvvvvwabiwadawaeiwagawagewagiwagowakawakewakiwakuwanawanuwarawarewariwarowaruwatawazawwwwxxxxyaboyadoyaguyakeyakuyamayamiyamuyaneyariyaruyasoyayayobiyobuyohayoinyokayokiyokoyokuyomeyomiyomoyomuyoneyoriyoruyosayoseyosoyosuyouiyoyoyubiyugeyukayukiyukuyumeyumiyuriyuruyuuiyyyyzarizehizekuzokuzouozzzz'
djp[5] = 'aayuuabiruabukuaburaacchiadanaagariagaruagekuageruaguraaijinaijouaikenaikouaimaiaisouaitaiaitouaitsuaiyouakajiakariakasuakeruakiruakiyaakkanakkouakubiakugiakujiakujoakumaakumuakuruakutaakutoamadoamaguamamiamariamaruamasuamidoanataanbaiangaiangouangyaanikianjuuankenanminannaianoneanoyoanseiantaianteianzenaoumaaoumearakiaranoarasuarataaratearenoareruaruhaarukuasahiasaruaseriaseruasobiasobuasokoassenasubuasukoatamaatariataruatenaateruatsuiattouawareawasuayauiayumiayumuazukibachibakenbakkabamenbanjibanmebanribantebashabashobashubatsubeikabekkobengibengobenjobenribetsubidoubifuubijinbikoubisaibiyoubochibokinbokoubosanboseiboshibotaibotanboueibougoboukabouonboutobouzububunbudoubuhinbujinbukaibukkabumonbunaibunanbunbobungobungubuninbunkabunkibunkobunpibunpubunribunyabureibushibushobusoubusuubutaibutoubutsubuyouchakuchayachianchienchijichijochikachikuchirichiruchiyochiyuchizuchokuchotochuuidaibudaidadaieidaigidaijidaikudairidaizudajundakaidakkedakkodanjidanjodankidankodannadanwadappidaroudaruidasendashadashidasuudatendatoudattedebandeiridekaidemaedenkadenkidenpadenpodenwadesaedeshideshodochidodaidojoudokkadonkadonnadooridoreidoshadosuudougadougidougudouindoujidoukadoukidoumodouondouridourodousadousedouwadouyadouzodoyoudutsuebaruebesuebisuedahaegakueibuneichieidaneijuueikaneikoueimeieineneinoueiseieitaieiyoueiyuueizouekiinekikaekuboemakiemonoenbanenbunendanendenendouenganengeienjouenkaienkeienmanenmeiennaienoguenpouenryoenseiensenensouensuientaientenentouenzanerabuettoufubenfuchifudanfudoufuerufugenfugoufuhaifuheifuhenfuhoufuinifujinfujoufujunfukaifukeifukenfukinfukkifukoufumanfumeifumiefuminfumonfumoufuninfunkafunkifunoufurinfuruifuruufuryofusaifuseifusenfushafushifutaefutaifutanfuteifutoifutonfutoufuudofuufufuujafuumifuusafuyoufuyuufuzaifuzeifuzengachigaibugaiengaijugaikagaikigaimugairogaiyagakkagakkigakkugakuigamangamengangugankagankogansogappigarougashigataigazougehingejungekaigekkagemengenbagendogengagengigengogenjigenkagenkigennigenrigensogenyagenyugeppugesangeshageshigesuigezangidaigihougijougikaigikougimonginengingaginmiginouginzagireigirongiseigishigisougiyuugizougogangogengohangojuugokaigokangokengomengongogoningoringosangoshigoshogosougougigouhigouingoukagourigozenguchigunbigunbugunjigunjugunkiguraigutaigyakugyobagyoenhaakuhachihadaehaeruhaheihahenhaianhaibihaienhaifuhaigohaiinhaijohaikihaikuhairuhaisohaitahakaihakenhakkahakkihakuihamonhangahanjihankihankohannehanpahaorihappaharaiharanharauhasanhaseihashahashihashuhasonhatanhatsuhayaiheianheiinheijiheikaheikiheionheisaheiwaheiyahenjahenjihenkahibunhidaihidoihieruhigaihiganhihanhiheihiikihijouhijunhijuuhikaehikanhikkihikouhikuihimanhimeihimenhinanhindohininhinpuhireihiroihirouhisaihisanhishahishohisouhissuhitaihiteihitoehiyouhodouhoeruhogeihoheihoikuhojuuhokanhokenhokouhokuihonbahonbuhondohonjahonkehonkihonnehonnohonoohontohonyahoriehoryohoseihoshihoshuhosoihosouhossahottohouanhoubihoueihoufuhougahoukahoukihoukohoumuhououhouruhouwahoyouhoyuuhozenhozonhyakuibaruibikiibukiicchiichiiichouidakuidokoifukuigakuigamuigyouihyouiibunijimeijiruikagaikakuikaniikariikaruikasuikijiikikiikioiikiruikkaiikkanikkenikkouikkyoikokuikudoikueiikujiikuraikusaimadaimaniimayaimiaiimyouinadainakainbouinkaninnaiinneninoriinoruinshiinshuintaiinyouinzuuippaiippanippenippinipponippouippuuirebaireruiroaiirohairokeiryouisakuisaruisekiishinishouisogiisoguissaiisseiissenisshoisshuissouitadeitakuitamiitamuitaruitasuitokoitomaittaiittanitteiittenittouiwabaiwamaiyadaiyakeiyakiiyakuiyaoiiyokuizokuizukoizukuizumiizurejibanjibunjichijidaijidanjidenjidoujigenjihanjihenjihoujijoujijuujikaijikanjikeijikenjikkajikoujimaejimanjimeijimenjiminjimonjinanjininjinjajinjijippijiraijireijironjisanjiseijishajishojishujisuijisuujitaijitenjitsujittojiyuujizaijizenjizoujobanjogaijogenjogonjojoujokinjokoujokunjokyojomeijoseijoshijoshujosoujoubajoubujoudojoueijouenjougejougijouhojouinjoujijoukajoukijoumujoutejoutojouzujoyuujuekijukeijukenjukoujunanjunbijundojunjijunjojunnijunrojunsajureijuseijushijutsujuudojuugojuujijuukajuukijuunijuuoujuuyujuyoujuzoukabankabaukabenkabinkachikadaikadankadenkadoukaerikaerukaesukafunkagankagenkagonkagoukaheikahoukaienkaigakaigikaigokaihikaiinkaijikaijokaikakaikikaikokaimukairokairukaisokaitekaiunkaiwakajinkajoukajuukakaekakankakeikakkikakkokakoikakoukakuikakuukamaukameikamenkanaakanaikanaukanbukandokangokanjakanjikankakankikankukanmikanoukanpakanpukanrikansakansokanwakanyokaokukaorikaorukaraikareikaroikaroukaruikasaikasankaseikasenkashakashikashokashukasoukataikatankateikatenkatoukatsukattekattokayoikayoukayuikazaikazankazeikehaikeibakeibikeibukeidokeieikeienkeifukeigokeigukeihikeijikeikakeikikeikokeirikeirokeitokeiyukekkakekkikemuikenenkengikenjikenkakenkikenmukenpokenrikensakesouketsukewaikibankibinkiboukibunkichikidoukierukigaekigaikigankigenkigoukihaikihankihonkiirokijinkijoukijunkikaikikankikenkikinkikonkikoukimaekinenkinjokinkakinkikinkokinkukinmukinoukinrikinsukinyukiokukippukiraikiraukireikirinkisaikiseikisenkishakishikishukisonkisoukissakisuukitaikiteikitenkitoukitsukittekittokiyoikiyoukizaikizoukoamekochikodaikoerukofunkogaikogoekohankohonkojinkokeikokkakokkikokkokokonkokuekokuikomonkonbukondokongokonkakonkikonnakonoekonrokonwakonyakoorikoorukoraikosankoseikoshikoshokoshukosuikosuukotaekotaikoteikotenkottakouankoubakoubekoubokoubukoudokoueikouenkoufukougikougokouhakouhikouhokouinkouiukoujikoujokoukakoukikoukokoukukoumukouonkourikourokousakousokouunkouwakouyakouzakouzukowaikoyoukoyuukozoukubunkuchikudoikudoukufuukugenkuikikujoukujuukukankuminkunaikunankunjikunoukuraikuroikuroukuruukuryokusaikusenkushikutsukuubokuukikuurokuuyukuyoukyakukyogikyohikyokakyokukyomukyorikyouikyuuimachimaebimagaomahoumaidomaigomairumakkamakkimamiemangamankimanmamaroimaruimasaomashimasuimatsumayoimayoumazuimeatemeianmeibomeigameigimeijimeikimeiromeiunmeiyomemaimenjomeotomeshimettamibaemibunmichimierumihonmiirumijinmikaimikanmikkamikonmimaimimanmimaumimeiminjiminjuminkaminnaminouminwamiraimirenmisaomisuimitaimiteimitsumizenmochimoerumohanmohoumokeimokkamomenmonbumonjimonjomonkamonkomonkumonpimoraumoroimoshimoshumotsumottemottomoudamoufumouhimoukemouramousumoyoumuboumuchamuchimudanmuekimufuumugaimugenmugonmuhaimuhoumuikamuimimujinmujoumujunmukaemukaimukaumukeimukoumukuumumeimunenmuninmunoumuronmusenmushamushimusoumusuumutsumuttomuyoumuzaimuzanmyakunaeginagainaibunaijinaijunaikanaikinaimunaiyanamaenanbunandenandonankananranantenantonaorunaosunaraunashinatsundesuneagenebienebounedainedannegainegaonegauneikineironekkinekkonemuinendonenganenjinenpinenzaneraineraunetsunezounibannibuinibunnidainierunigainigaonigounigunniguunijuunikainikkanikkinikuinimaininaunininninkaninkininmuninpuniruiniseinishinochinondononkinorennoroinorounoshinoudonouennoufunouhanoukanourinozuenuguunuimenukuinuruinushiobakeobiruodakuodekoodoriodoruodosuogamuogawaogoruohakoohesooiwaiojigiokaneokasuokazuokiaiokibaokinaokiruokiteokkiiokoruokosuokureokuriokuruomakeomodeomokiomomiomoniomoruomosaomoteonagoonajionakaonaraondanonjinonjouonkeionkenonkouonoreonreionseionsenonshaonshiontaionzonooameoodaioogoeooiniookiioozeioppaioreruoriaioriruorokaorosuosejioshieoshiiosoreossanotakuotokootomeotonaotoruotosuototooubeioubououbunouchioudanougonoujououkouounenouraiousenoutaioutenoutououyouowariowaruoyakooyamaoyobioyobuoyogioyoguoyosooyubipattopekinpokanrakkarasenreienreigireijireikarekkaremonrendarengarenparensarenzaretsuriageribenriekirigairihanrijunrikairikeirikenrikonrikourimenrinenringorinjirinkarinririnyaripparironrisanriseirishirisouritenritouritsuriyouriyuurojourokenromenrongironrirosenrotenroufurougorouhirouhoroujoroukaroumurousoruijiryakuryohiryokusabousabuisadousaekisaerusahousaiaisaibusaidosaiensaifusaigosaikasaikisaikosaikusaimusaitasakaisakansakkasakkisamuisanbisanbusandosanjisanjosankasanpisanposanpusansosanyasanyosappusarausasensashisasoisasousateisatousatsusattosawansayousayuusedaiseginseianseibiseiboseibuseidoseieiseienseifuseigiseigoseihaseihiseihoseijiseikaseikiseimuseiouseiriseitoseiunseizaseizusekaisekensekkisekkusekousemaisendosengosenjasenjisenkasenkusenmusenpisenrisenrosensusentesentosenzoseronsesousetaisetsushainshajishakashakoshareshiaishianshibashibishibushieishienshigishigoshihishiinshijishijoshikashikishikushimashimeshimishimoshinashinushirishiroshirushisashitashiteshitoshiwashiyashoenshohoshoinshojishojoshokashokishokushorishouushubishueishuenshufushugishuinshujushukishumishurishusashutoshuuishuwashuyusochisodaisoerusogaisojousokaisokkasokousokuisonaesonnasorensorousosensoshisottesottosouansoubasoubisoudasoufusougisougosoujisoukasoukisoukosoumusouonsouousourisousasozaisozeisuekosuenisuerusugaosugoisuieisuijisuikasuikisuionsuirisuirosuisosukuisukuusumaisumousunaosushisuttosuujisuukotaboutabuntachitadaitaerutaezutagaitahoutaiantaidataidotaigataigitaihataihitaihotaiintaijitaikataikitaikotaimataiontaioutairataisataiwataiyotajuutakaitamentanantanbitanbotangotanintankatankitannitanpotansatansotansutaoretaosutasaitashatashotasuutatoetatoitatsutattatattetayouteatetehaitehonteianteidoteienteigiteiinteijiteikateikiteionteireteiriteisotejoutejuntekiitemaetengatenjitenkatenkitenpotenputenritensateseitesuutetsuteusutochitohoutoiyatojoutokaitokeitokentokkitokoutokuitomintomoetonaitonbotondatonyatookatookutooritoorutoosutoppatorietoriitoseitoshitoshotosoutotantottetouantoubutoueitoufutougetougitouhatouhitouintoujitoukatoukitoumutounotououtouritoutotouyotouyutozantsubatsubotsubutsudotsugitsugutsujitsukatsuketsukitsukutsumatsumetsumitsumutsunatsunotsuratsuretsuritsurutsuwatsuyatsuyuttarauchuuudakuugokiugokuuijinukabuukaruukemiukeoiukeouukeruumamiumareumaruumeruumibeunagiunaruunchiundouuneriuneruunkouunmeiunpanunsouuntenunyouurameuramiuramuureruuribauriteuruoiuruouuryouusagiushiousokuusugiutageuttaeuwagiuwakiuwasauyokuwadaiwafuuwaheiwairowakaiwaraiwarauwaruiwashiyabaiyabanyabouyagaiyagouyakanyakeiyakinyakkayakkiyakuiyamaiyaoyayappayasaiyaseiyashuyasuiyataiyatouyatsuyattayattoyayoiyoakeyobouyobunyochiyodanyogenyohouyojinyojouyokanyokeiyokinyokkayokuiyomeiyonenyoninyoronyosanyosenyoshiyosouyoteiyotouyoubiyoufuyougayougiyougoyouguyouhayouinyoujiyoukayoukiyoumayouniyousoyousuyoutoyowaiyoyuuyudanyudenyueniyuginyukaiyukueyuraiyuruiyusaiyuseiyusouyuuaiyuubeyuubiyuugayuuhiyuuhoyuujiyuukiyuumuyuuriyuuwayuuyozaikozaimuzaiyazakkazatsuzattozazenzeimuzekkuzenbuzendozengozenjizenkizentozenyazeseizougezougozouinzoukazoukizounizourizouyozuhanzuiinzuijizujouzukaizukanzukeizumenzunouzuruizusanzushizutsuzuttozuzan'
djp[6] = 'abunaiaburaeachiraaidokuaijakuaikokuainikuainoriaishouaishuuaisuruajiwaiajiwauakairoakaruiakashiakichiakikanakinaiakindoakiudoakuninakuseiakushuakuyouamaeruanaumeanchanandakeanesananisanankokuanmarianmokuanosaaanshinanshouaomukeaoyagiaozoraappakuarashiarasoiarasouariyouaruihaasagaoasahanasatteasayuuashibaashikoashitaassariasshouataeruatashiatsugiatsumiatsusaattenoayaukubaasanbaibaibaikinbaitaibaitenbaiyoubaizoubakaribakerubakkinbakufubakuhabakuonbakurobanchibangoubanjinbankonbannenbanninbannoubansoubanzaibanzeibanzenbarasubarerubassaibasshibassuibaterubattenbeihanbeijinbekkanbekkyobenkaibenkeibenmeibenronbensaibentoubessoubigakubimyoubinboubinjoubinkanbinsenbiryoubishinbishoubisokubokasubokerubokokubokuyabonchibonjinbonninbonsaibonyuubosekiboshuubottouboudaiboudanboudoubouekiboufuubougaibougyobouhanboukanboukenboukouboukuuboukyoboumeibousaibousanbousenboushibousoubousuiboutoubuchoubugyoubujokubukimibukkenbundanbungeibunjoubunkaibunkeibunkenbunkoubunmeibunmenbunminbunpaibunpoubunruibunsanbunshibunshobunsuubuntaibuntanbuonnabuppanbuppinburakubushoubussanbusshibussoubuttaibuzokubyakuebyakuibyoububyouinbyoukibyourichadouchairochakuichantochawanchichichigaichigauchigyochihouchiikichijinchijouchikaichikauchikeichikenchimeichinkachinouchinpuchisaichiseichishichisouchissochisuichitaichitenchoitochokinchokkachomeichoshachoshochosuichottochoubochoudachoudochouinchoujachoujichoujochoujuchoukachoukichoumechourichousachouwachozouchuubuchuukachuukichuukochuuouchuusachuutochuuwachuuyadabokudagekidaibendaibundaichidaidaidaidoudaigaedaihondaijindaikandaikindaikondaikoudaimeidainindainoudaishadaishidaitaidaitandaiyoudaizaidakaradakedodakkaidakkandakyoudakyuudamarudamasudanboudanchidandandandoudangaidangandangendangoudanjoudankaidankoudanmendannendanpendanseidanshidansoudansuidantaidanteidantoudanyuudanzendarakedarakudarekadasekidashindassendasshudassoudassuidatsuidattaidayorideashidedokodekatadekirudekkaidemisedemukudenchidendoudengendengondenkoudenpoudensendenshadenshidensoudentoudeshoudesugadobokudocchidohyoudoitsudokerudokokadokujidokyoudomorudonarudonatadondondonkandonyoudosekidosokudouagedouboudouchidoudoudoufuudouhandouhoudoujindoujoudoukandoukendoukoudoukyodoumeidounendounindourandouruidouseidousendoushadoushidoushudousoudousuudoutaidouteidoutendoutoudouyoudouzendouzouechigoedokkoeigyoueikyoueikyuueiyakueizokuekibenekidenekimaeekitaiekkyouenchouendakaendateengawaengekienjiruenkakuenmokuenpyouenshouenshuuensokuentakuenyasuenzurueshakufubukifuchinfuchoufuchuufufukufuhyoufujokifukahifukamifukasafukasufukerufukisofukkenfukkoufukokufukubufukuinfukumifukumufukurifukurofukyoufukyuufumotofunadefunakafunarefungaifunshafunsoufunsuifuntoufureaifureaufurerufurikofurobafurokufuroyafurugifurusufuryoufusagufusakufusegufusekifuserufushinfushoufusokufusumafutabafutagofutamifutarifutorufutsuufuttoufuukeifuurinfuusenfuushafuushifuushofuutoufuwarifuyasufuyouifuyubafuzokugacchigaijingaikangaikengaikougaimengainengairaigairongaisangaishagaishigaitougaiyougaiyuugakkaigakkougakubugakuengakufugakuhigakuingakutogakuyaganbanganbouganganganjouganmenganmougannenganponganraiganshogansougantanganyuugappeigarasugashougashuugassougawarigeimeigeiningeinougeishagekidogekigagekikagekkangekkeigekkougenbungenchigendaigendougengougenjingenjougenjuugenkaigenkangenkeigenkingenkougenmaigenmengenpongenrongensangenseigensengenshigenshogenshugensougensuigentaigentangenteigentengenyuugenzaigenzeigenzougerakugessangesshagichougigokugijukuginkougisekigishingishougiwakugofukugogakugokakugokokugokuhigorakugotonigoubangoubengoudougouhangouheigouhougoujougoukaigoukeigoukengoukingoumongoureigouseigousengoushagoutougunbaigundangunjingunkangunpeigunseigunshuguntaiguntougunyougunzougururigushouguusuuguuzenguuzougyojougyokougyomingyoruigyosengyosongyottogyougigyoujigyoukogyoumugyouzagyuttogyuuhohabamuhabukuhachouhadagihadakahadomehagakihaganehagasuhagemihagemuhageruhagirehaibunhaichihaidenhaihonhaiirohaijinhaikanhaikeihaikenhaikinhaikyohaininhairyohaisenhaishahaishihaisouhaisuihaitaihaitouhaiyuuhaizaihajikuhajimehajiruhakakuhakamahakarihakaruhakasehakikehakkanhakkenhakkouhakobihakobuhakuaihakubahakubohakufuhakyuuhamabehamaruhameruhamonohanabihanamihanasuhanawahanbaihanbeihanbouhanbunhandanhandouhaneruhangenhanhanhanjouhankanhankeihankenhankouhanmeihanmenhannenhanninhannouhanranhanreihanronhanseihansenhanshahanshuhansouhansuuhantaihanteihantenhantouhanyouhanzaihappouharamuhareruharukahasamihasamuhassanhasseihasshahassouhatakehatakihatakuhatasuhattenhayakuhayanehayarihayaruhayasahayasehayasuhazumihazumuhazurehazusuhedatehegasuheibonheichiheiekiheigaiheiginheigouheihouheijouheikaiheikinheikouheimenheinenheiseiheishaheishiheitaiheitenheiyouhekigahekomihekomuhenbouhenchohendouhenjouhenjuuhenkanhenkeihenkenhenkouhensaihenseihensenhenshahentouhenyouhenzouherasuhibakuhibanahibarihibikihibikuhidanehidarihidorihidukehifukahigamihigamuhigatahigekihigorohigurehihyouhikagehikakuhikarihikaruhikazuhikemehikiaihikokuhikyouhikyuuhimeruhinakahinatahineruhinikuhinkonhinmeihinodehinomehinpanhinseihinshihinshuhirabihirakihirakuhirobahirosahirugehirukohirumahirunehiryouhisokahisomuhisshahisshihitaruhitasuhitodehitohihitomehitomihitorihitoyahitoyohitsuuhittouhiyakehiyakuhiyasuhiyokohiyorihizumuhobunehochouhodokuhokakuhokanihokkaihokorihokoruhokubuhokuouhokurohokyouhokyuuhomeruhomurahonbanhonbunhondouhonganhonkanhonkenhonkonhonkyohonmeihonmonhonnenhonninhonnouhonokahonpouhonraihonranhonruihonsenhonshahonshihonshohonsuuhontaihontenhontouhonzanhoppouhoreruhoryuuhoshiihoshouhoshuuhosokuhosuruhotaruhotokehotorihottanhoubeihoubouhoubunhouchihoudaihoudanhoudouhougaihougenhouhouhoujinhoukaihoukouhoumenhoumonhouninhoureihourouhouseihoushahoushihousouhousuihoutaihouteihouyouhyougahyougihyougohyoujihyoukahyoukihyouriibashoibutsuicchouichibaichibuichidaichidoichienichigiichigoichiinichijiichijoichiniichiouichiyaichizaichizuiegaraiemotoiidasuiikataiikiruiinariiinkaiiiwakeikenaiikichiikigaiikiikiikinaiikiumeikkakuikkiniikkokuikkyuuikotsuikubunikuseiikutsuikyokuimoutoinchouinochiinryouinsekiinshouippakuippyouirairairekaeiroiroironnairyokuisetanishikiishokuishukuisoideisoisoissekiisshinisshouisshunisshuuissokuitatteitsukaitsumoittokiittsuuiwakaniwashiiyaiyaiyoiyoizanaiizanauizuchiizushijakkanjanomejarerujibikajibikijibyoujicchijichoujidumejigokujigyoujihakujihyoujiisanjikakujikanijikatajikinijikkanjikkeijikkenjikkoujikokujikyuujimakujimotojimuinjinbunjinchijindoujinguujinkenjinkoujinmeijinminjinmonjinruijinsaijinseijinsenjinshujintaijintoujinyoujinzaijinzoujirikijiryuujisakujisekijishinjishoujishuujisokujissaijisseijissenjisshijissoujissuujitakujittaijitteijizokujoryuujoshinjoubunjouchojoudanjoudenjougaijougenjouhinjouhoujoujoujoujunjoukanjoukeijoukenjoukinjoukoujoukuujoumonjounaijouninjoureijourenjouseijoushajoushijoushojoushujousoujousuijoutaijoutoujouyoujouzoujoyakujuchuujudakujugyoujukugojukyoujukyuujumokujumyoujunbanjunjoujunkaijunkanjunkinjunkoujunnenjunreijunshijunshujunsuijuntoujurakujuryoujushinjushoujutakujuubunjuudaijuudanjuudenjuudoujuugunjuuhoujuukoujuukyojuumanjuumenjuuminjuunanjuuninjuuokujuuraijuusanjuuseijuusenjuushijuushojuusoujuutaijuutanjuutenjuutoujuuyonjuuyoujuwakikaasankaatsukabukakabukikaburekaburikaburukabutokachinkachoukachuukaettekagakukagamikagekikagerikagirikagirukagurakagyoukaiagekaiboukaidankaidoukaigaikaigankaigoukaigunkaiheikaihenkaihinkaihoukaiikikaiirekaijoukaijuukaikaikaikankaikeikaikenkaikinkaikoukaikyokaimeikaimenkainankaininkairoukaisaikaisankaiseikaisenkaishakaishikaishokaisoukaisuikaisuukaitaikaiteikaitenkaitoukaiyoukaizaikaizankaizenkaizoukakakukakarikakarukakasukakatokakerakakerukakikokakinekakkaikakkankakkoukakokukakomikakomukakudokakugikakugokakuhokakuinkakujikakurikakusakakusukakyoukakyuukamikikamokukamurikamurukanagukanamekanarikanatakanbaikanbankanboukanbunkanchikandaikandoukaneaikanerukanetekangaekangaikangeikangenkanjinkanjoukankaikankeikankinkankoukanmeikanminkanmonkannaikannenkannonkannoukanojokanpaikanpankanpoukanpuukanreikanrenkansaikansankanseikansenkanshakanshikansoukantaikantankanteikantenkantonkantoukanyoukanyuukanzaikanzankanzeikanzenkanzoukaoirokaradakaramikaramukarasukaratekarehakarekikarerakarerukariiekarinakarinikarirukariyakaryuukasakukasegikasegukasekikashinkashoukashuukasokukasseikassenkasshikassoukassuikasukakasumikasumukasurukatagikatakukatamekatamikatanakatarikatarukatasakatatekatokikattoukawaiikawakikawakukawarakawarikawarukawasekawasukawazukayakukazarikazarukazokukazurakeburikeburukedomokegasukegawakeibaikeidaikeigenkeihankeihinkeihoukeijoukeikaikeikankeikenkeikoukeimoukeirinkeiroukeisaikeisankeiseikeishakeishikeisoukeitaikeiteikeitoukeiyoukeizaikejimekekkankekkonkekkoukemonokemurikemurukemyoukenagekenasukenbunkenchikenchokendoukengaikengenkenjinkenjoukenkaikenkeikenkinkenkoukenkyokenmeikenminkenmonkennaikenninkenpoukenseikenshikensonkensuukenteikentoukenzaikenzenkenzoukerakukeredokeshoukessaikessankesseikessenkesshakessonketobaketsuiketteikettenkettoukezurukiatsukibakukibisukichoukidorukidukukidunakifukukiganekigarukigekikigyoukihakukiiroikijikukikakukikasukikimekikitekikokukikyoukikyuukimamakimarikimarukimerukimetekimonokimyoukinbenkinchokindaikingankingyokinkaikinkenkinkinkinkoukinnenkinohakinokokinomikinpenkinpinkinrinkinroukinseikinsenkinshikinshukintoukinyoukinyuukirakukirasukirejikiremekirerukirokukisekikiserukishinkishoukishuukisokukitakukitarukitekikitokukitsuikiwatakiyakukizamikizamukizokukizukukizunakobamukobitokobosukocchikochoukodokukodomokodukakoganekogatakogerukohabakoitsukojiinkojikikojimakokakukokkaikokkeikokkenkokkoukokokukokonokokorokokudokokueikokuenkokugikokugokokuhikokujikokumukokuoukokusokokuzekokyoukokyuukomakakomarukomerukomojikomonokomorukomugikonasukonbankondankondoukongenkongoukonjoukonkaikonkankonkyokonmeikonnankonnenkonohakonomikonomukonponkonrankonseikonsenkonteikoredekorerakorirukorobukoromokorosukosajikosamekosekikoshoukoshuukosshikosurukotobakotonikotorikoubaikoubankouboukoubunkouchakouchikoudaikoudankoudoukouekikoufunkougaikougeikougenkougoukouhaikouhankouheikouhoukouikikoujinkoujoukoukaikoukankoukeikoukenkoukinkoukonkoukoukoukuukoukyokoumeikouminkoumonkounaikouninkounoukouraikoureikouronkouroukouryokousaikousankouseikousenkoushakoushikoushokoushukousoukousuikoutaikouteikoutenkoutoukouwankouyoukouyuukouzaikouzankouzenkouzoukouzuikowasukoyakukoyamakoyomikoyubikubarukubisukubomikuchoukudakukudarikudarukudasukuganekugirikugirukugurukujirakukakukukumukukurukukyoukumiaikumorikumorukunrenkunrinkunshikunshukurabekurabukurasukurerukurogokurojikurokikurokokurumakurumukusakikusamekusarikusarukusenikushinkushuukusshikusurikutsuukuuchikuudoukuugunkuuhoukuuikikuukankuukoukuukyokuushakuusoukuutenkuuzenkuzurekuzusukyatsukyodaikyojinkyojuukyokoukyokuukyonenkyotaikyotenkyotoukyoubukyoudakyoudokyoueikyouenkyoufukyougikyouhokyouinkyoujukyoukakyoukikyoukokyoumikyoumukyourikyousokyoutokyouwakyouyokyouyukyoyoukyuuenkyuufukyuugikyuuhakyuujokyuukakyuumukyuurikyuuyokyuuyumaajanmaamaamabaramabutamacchimadikamadorimaemaemaeokimaeurimagarimagarumagerumagiwamaguremaguromaiasamaibanmaikaimainenmaisoumaisuumaizoumajimemajirimajirumakasumakerumakibamakkoumakotomakuramakurumamorimamorumanabumanakamanakomanekimanekumanerumaniaumanjoumankaimanmanmanmenmannenmanninmannoumanpaimanruimanseimantenmanukemanzaimarobumarudemarumimarutamasakamasanimasarumassaomasshimatagumatahamatanematasumatomemattanmattoumawarimawarumawasumayakumayugemazarumazerumeberimedamamegamimeganemegumimegumumegurumeichomeidaimeigenmeijinmeikaimeimeimeimonmeireimeiroumeisaimeiseimeishimeishomeishumeiyuumejiromekatamekurumemorimenboumendanmendoumenkaimenkyomenmenmenukimenzeimesakimeyasumezasumiburimidaremidasumidikamidorimigakimigakumigaramigarumigitemigotomiharimiharumiihaamijimemijukumikadomikakemikakumikatamikirimikkoumikomimikomumimotominageminamiminamominariminasuminatomingeiminkanminomominoriminoruminoueminpeiminpouminseiminshuminyoumioboemiryoumisakimisebamiserumisokamitamemitarimitasumitomemittsumiuchimiwakemiwakumiyagemiyakomiyamamiyorimizubemizugimizukemochiimodorimodorumodosumogakumogamimoharamohayamojirumokkoumokujimomerumomijimondaimondoumonoiimononomonyoumonzenmorasumorerumorotemosakumoterumotokimoujinmoukoumoushomoutenmoyasumoyorimuchuumujakimukerumukizumukyuumurerumuryoumusakumushinmushoumusubimusubumusukomusumemuttsumuyokamuyokumuyukamyoujimyoutonabikunadarenaderunafudanagamenagaranagarenagasanagasunagayanagekinagekunagerunagisanagomunagorinagoronagurunaigainaihounaijounaikainaikounaimennainainairannaiseinaisennaishinaishonaisounaiteinaiyounaizounakabanakamanakaminakusunamarinamerunamidanamikinanamenanasonanbeinanbennandainanikananimonanirananjuunankainankannankinnankounanminnanmonnanokananorinanorunanpounanseinantennantounanukananzennaoshinarabanarabinarabunaranunarasunarerunarininarutonasakenasarunasubinattounayaminayamunazekanebarinebarunebikineburunedarunedokoneesannegirunegotonejirunekasunekozenemakinemotonemukenemurinemurunendainengannengounenjuunenkainenkannenkinnennainennennenpainenpounenrainenreinenrinnensannenseinenshinenshonensuunentounesagenessennetamunetsuinettainettouneuchinezasunezuminidonenifudanigaminigaoenigasunigatenigerunigirinigirunigorunigosuniisannijimunikibinikkannikkeinikkounikomunikumunimononinaruninchiningenninjinninjouninmaeninmeininninninsounintaininteininzuunippouniramuniryuuniserunissannisshinissuunitteiniwakaniwakiniwarinobasunoberunobirunoborinoborunodesunodokanoharanokerunokorinokorunokosunomidonomitononakanoribanorikinoromanoserunouchinoudounouhounoujounoukinnoukounouminnourinnousannouseinoushinousonnoutannouzeinoyamanozokunozominozomunukasunukerunumerinunojinurasunurerunusuminusumunyuuennyuuinnyuujinyuukaoboeruochiauochibaochidoochiruodoodoodoshioginauohayouoidasuoikazeoikomioikomuoikosuoinukuoishiioiuchiokaeriokashiokkakeokonaiokonauokuchiokugaiokujouokunaiokusanomairiomanmaomochaomoideomoshiomotaiomutsuonchuuondokuongakuonkyouonnajionoonoonryouonshouonyomioobuneoodanaoodumeoofuneooganeoogataoogesaoogotooohabaookamiookataookawaookinaookisaookuraoomakaoomizuoomojioomonooomorioomugioosajioosujioowataooyakeooyukioozekioozoraoriorioroorooroshiosaeruosanaioseibooshareoshimuoshokuoteageotoroeototoiotoutootsuriouchououfukuougyououjiruoukokuoukyuuouryouousamaoushououshuuouzokuouzuruoyabunoyatsupinpinpunpunraamenraihairaihinraihourainenraitenrakkanrakuenrakugorakusaranbairanbourankeiranshiransourantouranyourashiireiboureibunreidaireigaireihaireijoureikaireikanreikinreinenreisaireiseireisenreisuireitanreitoureizourekkyorendourengourenjuurenkanrenkeirenkourenmeirenpairenpourensairensenrensourentairentourenyouresseiressharettouricchirigakurikimurikkenrikurorikyuurindourinjinrinjuurinkairippourirekiririkurisagerisokurittairiyakurokugarokunarokunirokuonronbunrongaironkyoronsenronsharonsourontenroshinroudourouganrouhouroujinrounenrouninroureirourenrousairoushirousuiruikeiruisuiryodanryokanryokenryokkaryokouryoubaryoudoryouinryoujiryouriryouteryuuharyuuhoryuuousabakusabirusacchisadakasagakusagarisagarusagasusagerusagurusagyousaiakusaibaisaibansaibousaibunsaidaisaidansaigaisaigensaihansaihensaihousaijousaikaisaikensaikinsaikonsaikousainansainensaininsainousairaisairuisaisansaiseisaisensaishisaishosaishusaitansaiteisaitensaiwaisaiyousaizensakabasakanasakarisakasasakatesakayasakebisakebusakerusakinisakkinsakkonsakokusakugosakuinsakujosakurasakuyasamasusamerusamukesamusasanakasanbonsanbousanchasanchisandaisandousanjousanjuusankaisankansankeisankensankousanmaisannansanninsanpaisanpinsanpousanransanrinsanruisansaisanseisansensanshasanshusansonsansousansuusanteisanyousanzansanzensaranisarasusasarusaserusashiesashousasokusasshisasugasasurusatogosatorusatsuisattousawagisawagusawarusayokusebirosebonesecchisegamusegyouseibunseichiseidaiseidouseiganseigenseigouseigyoseihenseihinseihouseiikiseiikuseijinseijouseikaiseikanseikeiseikenseikouseimaiseimeiseimonseinanseinenseinouseireiseironseisaiseisanseiseiseisenseishiseishoseishuseisouseisuuseitaiseitanseiteiseitenseitonseitouseiyouseizanseizeiseizenseizonseizousekasusekimusekiyusekkaisekkeisekkensekkinsemarusemerusemetesenakasenbaisenbeisenchisendaisendensendousengensengyosenjinsenjousenjuusenkansenkeisenkensenkousenkyosenmeisenmensenmonsennensenninsenpaisenpansenpousenpuusenreisenrensensaisenseisensensenshasenshisenshusensousensuisentaisentansenteisentousenyousenyuusenzaisenzenseppanseriaiseriauseshuusessensesshisesshusesujisettaisetteisettensettousezunishadoushagaishakaishakenshakkashakoushameishamenshanaishaokushareisharinshasaishaseishasenshashushasoushataishateishatsushazaishiageshibaishiboushibuishichishidaishidanshidoushigaishiganshigenshihaishihanshiheishihonshihoushiikashiikushiireshiirushiiteshiitoshijinshijoushijuushikaishikanshikeishikenshikiishikinshikkeshikkishikoushikyoshimaishimaushimeishimenshiminshimonshinaishinanshindoshingishingoshingushininshinjashinjushinkashinkishinnishinnoshinpashinpishinposhinpushinrishinroshinsashintoshinwashinyashipposhireishirenshirioshiroishisanshiseishisenshishashishishishoshisonshisoushissoshisuushitaishitaushiteishitenshitsushittoshiutoshiyoushiyuushizaishizenshoboushobunshochishodaishodoushoguushohanshojunshokaishokanshokeishokenshokkishokunshomeishomenshominshonenshoroushoruishosaishosenshoshoshotaishoteishotenshotoushoubishoubushoufushougeshougishougoshouhishouinshoujishoujoshoukashoukoshoumushounishourishousashousoshouwashouyoshouyushoyoushoyuushozaishozoushuboushudaishudanshudoushuganshuhanshuhoushujiishujinshukanshukeishukenshukkashukoushukunshuninshunjishunkishunoushuppishuruishusaishuseishusenshushishusseshusuishutaishutenshuuenshuugishuuhashuuinshuujoshuukashuukishuurishuutoshuwanshuyoushuzaishuzeishuzousobayasobokusocchisofubosoitsusokakusokkinsokkousokodesokokusokonesokudosokujisokuzasomarusomerusomukusonatasonbousongaisongensonkaisonkeisonminsonotasonouesonzaisoottosorasusoredesorejasorenisorerasorerusoshousosogusossensotodesotomisotsuisotsuusouchisoudaisoudansoudensoudousougeisougensougousouhousoujousoujuusoukaisoukansoukensoukinsoukousounansounensouransouronsouruisouryosousaisoushasoushisoushusousousousuisousuusoutaisouteisoutensoutousouttosouzaisouzeisouzensouzousuberusubetesudenisuekkosueokisugarusugatasugirusugosusugurusuibunsuidensuidousuigaisuigensuiginsuiheisuihensuiikisuijousuijunsuikeisuikousuimensuiminsuisansuisensuishisuisousuitaisuiteisuitousuiyousuketesukikesukimasumasusumomosundansunpousunzensuppaisurutosusumesusumisusumusutegosutekisuterusuuchisuuhaisuumansuwarisuwarusuzumesuzumutabakotaberutabinitadasutadorutagakutahatataibeitaiboutaichitaidantaidoutaiekitaifuutaigaitaigantaiguutaihaitaihantaihentaihoutaiikutaijintaijoutaijuutaikaitaikantaikeitaikentaikintaikoutaikyotaimantaimentainaitainintainoutairontaiseitaisentaishataishitaishotaisoutaiteitaitoutaiwantaiyoutaizaitaizantaizeitakakutakanetakaratakarutakasatakasetakigitakokutakumatakumitakusutamagotamanitamarutamerutamesutanchotandaitandentaniaitanimatanjoutanjuntanjuutankentankoutanmeitannentannintannoutanomitanomutanpentansantanseitanshotansuitansuutantantanteitantoutarasutarerutarirutarumutaryoutashoutasseitasshatasuketatakitatakutatamitatamutaterutattoitawaratayoritayorutayumutearaiteashitebikiteburitechoutedatetegakitegamitegarategarutegatategiwategoroteibouteidenteigenteihenteijuuteikeiteikouteimeiteineiteinenteireiteisaiteiseiteisenteishateishiteishuteisuuteitaitejinatekakitekidotekigitekijitekioutekkaitekkintekkoutekkyotekubitemototenbaitenboutenchitenjintenjoutenkaitenkantenkeitenkentenkintenkoutenkyotenmontennaitennentennoutensaitensentenshitenshutensuutentaitentententoutenukitenyoutenzaiteochiteppaiteppanteppenteppouterasutererutesagetesseitesuritetoritettaitetteitewaketobasutobihitobiratobosutochoutochuutodanatodoketodokutogarutogerutojirutokakutokasutokerutokkentokkuntokkyotokorotokowotokoyatokugitokunitomaritomarutomerutomonitomosutonaritonboutontontooshitoppuutorerutoryoutoshintotemotoubantoubentouboutoubuntouchitoudaitougeitougoutouguutouhoutoujoutoukaitoukantoukeitoukoutoumeitoumentoumintounaitounantounintouraitourontouruitousaitousantouseitousentoushatoushitoushotoushutousoutousuitouteitoutoitoutoutouyoutouzaitouzentozasutsuchitsudoitsugoutsuidetsuijitsuikatsuinitsuitetsukaitsukautsukuetsuraitsushitsutautsutsutsuuintsuujitsuukatsuurotsuuwatsuyoiuchiaiuchikiuchiwaudemaeuejiniuemukiukagauukeireukiukiukiyoeukkariunchinunkyuuunyokuunzariuramonuranaiuranauureeruuriageurourourusaiurushiushiroutagaiutagauutagoeutottoutoutoutsumiutsuruutsusuutsuwauyamauuzuuzuwabiruwafukuwagaiewagayawagiriwagyuuwaiwaiwakabawakamewakarewakariwakaruwakasawakasuwakatewakeruwakimiwamekuwanganwaremewarerawareruwariaiwariniwarugiwarusawasabiwatariwataruwatasuwazatowazukayaburiyaburuyachinyachouyadoyayagakuyagateyahariyakedoyakeruyakkaiyakubayakuinyakumeyakusuyakuzayakyuuyamateyamatoyameruyamomeyanagiyasakiyaseruyashinyasumiyasumuyasuneyattsuyauchiyobihiyobinayodareyodomuyofukeyogoreyogosuyohodoyojiruyokeruyokodeyokokuyokomeyokosuyokoteyokumoyonakayonhonyonjuuyonsenyorebayorozuyorutoyoseruyoshinyoshuuyosokuyosomiyosooiyosoouyotakuyottsuyoubouyouchiyouekiyoufuuyouganyouhinyouikuyoujinyoujouyoukaiyoukenyoukouyoumouyouninyoureiyourouyousaiyouseiyoushayoushiyoushoyoushuyousouyousuiyoutenyowakiyowamiyowaneyowaruyoyakuyozorayubiwayuderuyugamuyuigonyuishoyuitsuyukatayukikiyunomiyunyuuyuragiyuraguyureruyurumuyurusuyusuruyutakayutoriyuubenyuubinyuubouyuuchiyuuchoyuudaiyuudouyuuduuyuuekiyuugaiyuugenyuugouyuuguuyuuhanyuuigiyuujinyuujouyuukaiyuukanyuukouyuumeiyuunouyuuranyuureiyuuryoyuuseiyuusenyuushiyuusouyuusuiyuusuuyuutaiyuuyouyuuyuuyuuzaiyuuzeiyuuzuuyuzuruzaazaazachouzaibeizaidanzaigaizaigenzaijuuzaikaizaininzairaizaisanzaiseizakkyozannenzanpaizanruizanshozansonzanteizanzonzareruzasekizasshizassouzattouzeihouzeikanzeikinzeiseizekkouzenbeizenbunzenchizenhanzenjinzenkaizenkenzenkouzenmaizenmenzennenzenpaizenpanzenpouzenreizenrinzenseizensenzenshazentaizenteizenyouzenzenzettaizokkouzokugozonbunzonpaizonzaizoudaizouekizougenzouhanzoukeizoukinzousanzouseizousenzoushizoushozousuizouteizoutouzouwaizouzeizubarizugarazuhyouzuibunzuishozurasuzureruzutsuuzuuchizuutto'

for (let i = 1; i < 7; i++) {
  for (let j = 0; j < djp[i].length; j += i) {
    dicewareJP.push(djp[i].substring(j, j + i))
  }
}
