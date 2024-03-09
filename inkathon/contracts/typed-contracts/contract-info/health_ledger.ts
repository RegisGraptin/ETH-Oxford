export const ContractAbi = `{"source":{"hash":"0x2c2b61b32c3e288e4d9d501f2977fa74470011ebf0316b762b9eb729276f49e6","language":"ink! 4.3.0","compiler":"rustc 1.75.0","build_info":{"build_mode":"Release","cargo_contract_version":"3.2.0","rust_toolchain":"stable-x86_64-unknown-linux-gnu","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"health_ledger","version":"0.1.0","authors":["[your_name] <[your_email]>"]},"spec":{"constructors":[{"args":[],"default":false,"docs":["Constructor"],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":4},"selector":"0x9bae9d5e"},{"args":[],"default":false,"docs":[],"label":"default","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":4},"selector":"0xed4b9d1b"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":8},"balance":{"displayName":["Balance"],"type":11},"blockNumber":{"displayName":["BlockNumber"],"type":13},"chainExtension":{"displayName":["ChainExtension"],"type":14},"hash":{"displayName":["Hash"],"type":12},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":2}},"events":[],"lang_error":{"displayName":["ink","LangError"],"type":6},"messages":[{"args":[{"label":"title","type":{"displayName":["String"],"type":3}},{"label":"doctor","type":{"displayName":["String"],"type":3}},{"label":"hospital","type":{"displayName":["String"],"type":3}},{"label":"record_type","type":{"displayName":["String"],"type":3}}],"default":false,"docs":[" Store a new medical record"],"label":"add","mutates":true,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":4},"selector":"0x4b050ea9"},{"args":[],"default":false,"docs":[" Get the record"],"label":"get","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":7},"selector":"0x2f865bd9"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"records"}],"name":"HealthLedger"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"sequence":{"type":1}}}},{"id":1,"type":{"def":{"composite":{"fields":[{"name":"date","type":2,"typeName":"u64"},{"name":"title","type":3,"typeName":"String"},{"name":"doctor","type":3,"typeName":"String"},{"name":"hospital","type":3,"typeName":"String"},{"name":"record_type","type":3,"typeName":"String"}]}},"path":["health_ledger","health_ledger","HealthRecord"]}},{"id":2,"type":{"def":{"primitive":"u64"}}},{"id":3,"type":{"def":{"primitive":"str"}}},{"id":4,"type":{"def":{"variant":{"variants":[{"fields":[{"type":5}],"index":0,"name":"Ok"},{"fields":[{"type":6}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":5},{"name":"E","type":6}],"path":["Result"]}},{"id":5,"type":{"def":{"tuple":[]}}},{"id":6,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":7,"type":{"def":{"variant":{"variants":[{"fields":[{"type":0}],"index":0,"name":"Ok"},{"fields":[{"type":6}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":0},{"name":"E","type":6}],"path":["Result"]}},{"id":8,"type":{"def":{"composite":{"fields":[{"type":9,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":9,"type":{"def":{"array":{"len":32,"type":10}}}},{"id":10,"type":{"def":{"primitive":"u8"}}},{"id":11,"type":{"def":{"primitive":"u128"}}},{"id":12,"type":{"def":{"composite":{"fields":[{"type":9,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":13,"type":{"def":{"primitive":"u32"}}},{"id":14,"type":{"def":{"variant":{}},"path":["ink_env","types","NoChainExtension"]}}],"version":"4"}`;
export const ContractFile = `{"source":{"hash":"0x2c2b61b32c3e288e4d9d501f2977fa74470011ebf0316b762b9eb729276f49e6","language":"ink! 4.3.0","compiler":"rustc 1.75.0","wasm":"0x0061736d01000000012f0860027f7f0060037f7f7f0060000060047f7f7f7f017f60037f7f7f017f6000017f60027f7f017f60047f7f7f7f0002800107057365616c310b6765745f73746f726167650003057365616c301176616c75655f7472616e736665727265640000057365616c30036e6f770000057365616c3005696e7075740000057365616c320b7365745f73746f726167650003057365616c300b7365616c5f72657475726e000103656e76066d656d6f72790201021003181704000400000100050001000101060000020000020207010608017f01418080040b0711020463616c6c0019066465706c6f79001a0aff26172b01017f037f2002200346047f200005200020036a200120036a2d00003a0000200341016a21030c010b0b0bc30201067f230041106b22022400024020012802042206450440410121030c010b200128020022072d000021042001200641016b360204410121032001200741016a3602000240024002400240200441037141016b0e03020301000b20044102762105410021030c030b2006410549200441034b720d02200728000121052001200641056b3602042001200741056a36020020054180808080044921030c020b200241096a20043a0000200241013a000820022001360204200241003b010c200241046a2002410c6a410210080d0120022f010c220141ff014d0d0120014102762105410021030c010b200241096a20043a0000200241013a0008200220013602042002410036020c200241046a2002410c6a410410080d00200228020c220141027621052001418080044921030b2000200536020420002003360200200241106a24000b8e0101017f20002d00042103200041003a0004027f0240200304402001200041056a2d00003a00004101200028020022002802042203200241016b2202490d021a200141016a20002802002201200210061a0c010b41012000280200220028020422032002490d011a200120002802002201200210061a0b2000200320026b3602042000200120026a36020041000b0b7401017f230041106b2202240002402001413f4d044020002001410274100a0c010b200141ffff004d0440200220014102744101723b010e20002002410e6a4102100b0c010b200141ffffffff034d044020014102744102722000100c0c010b20004103100a20012000100c0b200241106a24000b2d01017f2000280208220220002802044904402000200241016a360208200028020020026a20013a00000f0b000b4801027f024002402000280208220320026a22042003490d00200420002802044b0d00200420036b2002470d01200028020020036a2001200210061a200020043602080f0b000b000b2601017f230041106b220224002002200036020c20012002410c6a4104100b200241106a24000b4d02017f027e230041206b2200240020004200370308200042003703002000411036021c20002000411c6a10012000290308210120002903002102200041206a2400410541042001200284501b0b4d01017f024002402001450440410821020c010b20014193c9a4124f0d01418882052d00001a4108200141386c10132202450d010b2000410036020820002001360204200020023602000f0b000b6f01027f230041106b22032400024002402001450440410121020c010b200141004e2204450d01027f2002450440200341086a20042001101c20032802080c010b2003200420014101101b20032802000b2202450d010b2000200136020420002002360200200341106a24000f0b000bdc0301097f200028020822022000280204460440230041206b2204240002400240200241016a2205450d00200028020422034100480d004104200341017422022005200220054b1b2202200241044d1b220941386c210520094193c9a41249410374210202402003450440200441003602180c010b200441083602182004200341386c36021c200420002802003602140b200441146a2103230041106b22062400200441086a2207027f024002402002044020054100480d01027f20032802040440200341086a280200220a450440200641086a200220054100101b20062802082108200628020c0c020b2003280200210302402002200510132208450440410021080c010b20082003200a10061a0b20050c010b200620022005101c2006280200210820062802040b21032008044020072008360204200741086a200336020041000c040b20072002360204200741086a20053602000c020b20074100360204200741086a20053602000c010b200741003602040b41010b360200200641106a24002004280208450d01200428020c1a0b000b200428020c21022000200936020420002002360200200441206a2400200028020821020b2000280200200241386c6a2001413810061a200241016a22010440200020013602080f0b000b9d0101017f230041106b22032400200220011009200104402000200141386c6a21010340200320002903003703082002200341086a4108100b200041086a280200200041106a28020020021012200041146a2802002000411c6a28020020021012200041206a280200200041286a280200200210122000412c6a280200200041346a28020020021012200041386a22002001470d000b0b200341106a24000b1000200220011009200220002001100b0ba00101027f02402001200020016a41016b410020006b7122004d0440024041808204280200220120006a22032001490d00418482042802002003490440200041ffff036a22022000490d0320024110764000220141ffff034b0d032001411074220120024180807c716a22032001490d0341002102418482042003360200200020016a22032001490d010b418082042003360200200121020b20020f0b000b41000bd00502087f017e230041106b22062400200641086a2001100702400240024020062802080d00200628020c220220012802044b0d00200620024101100f200128020422052002490d002006350204210a2006280200200128020022032002100621042001200520026b3602042001200220036a3602002002450d01200241076b22014100200120024d1b2108200441036a417c7120046b21094100210103400240024002400240024002400240024002400240200120046a2d00002205411874411875220741004804402005418080046a2d000041026b0e03030102080b200920016b410371450440200120084f0d090340200120046a220541046a280200200528020072418081828478710d0a2008200141086a22014b0d000b0c090b200141016a21010c090b200141016a220320024f0d06200320046a2c000021030240200541e001470440200541ed01460d012007411f6a41ff0171410c490d042007417e71416e470d0820034140480d050c080b200341607141a07f460d040c070b2003419f7f4a0d060c030b200141016a220320024f0d05200320046a2c000021030240024002400240200541f0016b0e050100000002000b2007410f6a41ff017141024b0d0820034140480d020c080b200341f0006a41ff01714130490d010c070b2003418f7f4a0d060b200141026a220520024f0d05200420056a2c000041bf7f4a0d05200141036a220120024f0d05200120046a2c000041bf7f4a0d050c040b200141016a22012002490d020c040b200341404e0d030b200141026a220120024f0d02200120046a2c000041bf7f4c0d010c020b200120046a2c000041bf7f4a0d010b200141016a21010c020b200041003602000c050b200120024f0d000340200120046a2c00004100480d012002200141016a2201470d000b0c030b20012002490d000b0c010b200041003602000c010b20002002ad422086200a84370204200020043602000b200641106a24000b3c01027f027f200145044041888204210141010c010b410121024188820441013a000041898204210141020b2103200120023a0000200020031018000b12004188820441003b0100410041021018000b8f0101047f230041106b220224002002428080013702082002418882043602044100200241046a100c024020022802082205200228020c2203490d00200228020421042002410036020c2002200520036b3602082002200320046a36020420002001200241046a1011200228020c220020022802084b0d00200420032002280204200010041a200241106a24000f0b000b0d0020004188820420011005000bc10e02157f037e230041b0016b22002400024002400240100d41ff01714105470d0020004180800136026841888204200041e8006a100320002802682201418180014f0d0020014104490d022000418c82043602402000200141046b360244418b82042d00002102418a82042d00002104418982042d0000210102400240418882042d00002203412f470440200341cb0047200141ff017141054772200441ff0171410e47200241ff017141a9014772720d05200041d8006a200041406b10142000280258220b450d05200028025c210320002802602104200041a4016a200041406b101420002802a4012202450d0520002802ac01210820002802a8012105200041106a200041406b1014200028021022090d010c050b200141ff017141860147200441ff017141db004772200241ff017141d90147720d040c010b2000280218210620002802142107200041e8006a200041406b10142000280268450d0320034108762101200041d0006a200041f0006a280200360200200020002902683703480b200020013b0015200041176a20014110763a00002000413c6a200041d0006a280200360200200020063602302000200736022c2000200936022820002008360224200020053602202000200236021c2000200436021820002000290348370234200020033a00142000200b36021020004280800137026c2000418882043602684100200041e8006a100c200028026c220320002802702201490d00200028026821022000200320016b220336026820022001200120026a2201200041e8006a100020032000280268220249720d002000200236024420002001360240200041086a200041406b100720002802080d00200041c8006a200028024441386e2202200028020c2201200120024b1b100e2001044020004194016a21020340200028024422034108490d022000280240220429000021152000200341086b3602442000200441086a360240200041a4016a200041406b101420002802a4012203450d0220002902a8012116200041a4016a200041406b101420002802a4012204450d0220002802ac01210520002802a8012108200041a4016a200041406b101420002802a4012209450d0220002802ac01210620002802a8012107200041a4016a200041406b101420002802a401450d02200041e0006a200041ac016a280200220a360200200020002902a401221737035820022017370200200241086a200a36020020002006360290012000200736028c012000200936028801200020053602840120002008360280012000200436027c200020163702742000200336027020002015370368200041c8006a200041e8006a1010200141016b22010d000b0b20002802482204450d002000200029024c22153702a801200020043602a401200b0d01200041e8006a210b230041306b22012400200141246a2015422088a72208100e024020012802282203200128022c22024f0440200841ffffffff01712205200320026b2203200320054b1b220504402001280224200241386c6a210d410021030340200320046a22022903002115200241086a2802002106200141186a200241106a28020022094100100f200128021c210e2001280218200620091006210f200241146a2802002107200141106a2002411c6a28020022064100100f2001280214211020012802102007200610062111200241206a280200210a200141086a200241286a28020022074100100f200128020c21122001280208200a2007100621132002412c6a280200210c2001200241346a280200220a4100100f200128020421142001280200200c200a1006210c2003200d6a220241346a200a360200200241306a20143602002002412c6a200c360200200241286a2007360200200241246a2012360200200241206a20133602002002411c6a2006360200200241186a2010360200200241146a2011360200200241106a20093602002002410c6a200e360200200241086a200f36020020022015370300200341386a2103200541016b22050d000b0b200b2001290224370200200b41086a2008360200200141306a24000c010b000b2000280268210120002802702102230041106b2200240020004180800136020820004188820436020402402001450440418882044181023b0100410221000c010b2000410136020c4188820441003a000020012002200041046a1011200028020c220041818001490d00000b410020001018000b000b23004180016b22012400200141086a200041106a2202413010061a200141e0006a200141286a28020036020020012001290320370358200142003703702001410836027c200141f0006a200141fc006a1002200141d4006a2001411c6a280200360200200141ec006a200141346a28020036020020012903702115200141c8006a200241086a280200360200200120153703382001200129021437024c2001200129022c37026420012002290200370340200041a4016a200141386a101020014180016a240020002802a40120002802ac011017410041001015000b410141011015000bc20101047f230041106b2200240002400240100d41ff01714105470d0020004180800136020c418882042000410c6a1003200028020c2200418180014f0d00024020004104490d00418b82042d00002100418a82042d00002101418982042d00002102418882042d0000220341ed01470440200241ae01472001419d014772200041de0047722003419b0147720d014108410010171016000b200241cb00472001419d0147722000411b4772450d020b410141011015000b000b4108410010171016000b2b00200204402003450440418882052d00001a0b20012002101321010b20002002360204200020013602000b3901017f230041106b22032400200341086a200120024100101b200328020c21012000200328020836020020002001360204200341106a24000b0bc3010200418080040b800101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010041c281040b33020202020202020202020202020202020202020202020202020202020202030303030303030303030303030303030404040404","build_info":{"build_mode":"Release","cargo_contract_version":"3.2.0","rust_toolchain":"stable-x86_64-unknown-linux-gnu","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"health_ledger","version":"0.1.0","authors":["[your_name] <[your_email]>"]},"spec":{"constructors":[{"args":[],"default":false,"docs":["Constructor"],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":4},"selector":"0x9bae9d5e"},{"args":[],"default":false,"docs":[],"label":"default","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":4},"selector":"0xed4b9d1b"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":8},"balance":{"displayName":["Balance"],"type":11},"blockNumber":{"displayName":["BlockNumber"],"type":13},"chainExtension":{"displayName":["ChainExtension"],"type":14},"hash":{"displayName":["Hash"],"type":12},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":2}},"events":[],"lang_error":{"displayName":["ink","LangError"],"type":6},"messages":[{"args":[{"label":"title","type":{"displayName":["String"],"type":3}},{"label":"doctor","type":{"displayName":["String"],"type":3}},{"label":"hospital","type":{"displayName":["String"],"type":3}},{"label":"record_type","type":{"displayName":["String"],"type":3}}],"default":false,"docs":[" Store a new medical record"],"label":"add","mutates":true,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":4},"selector":"0x4b050ea9"},{"args":[],"default":false,"docs":[" Get the record"],"label":"get","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":7},"selector":"0x2f865bd9"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"records"}],"name":"HealthLedger"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"sequence":{"type":1}}}},{"id":1,"type":{"def":{"composite":{"fields":[{"name":"date","type":2,"typeName":"u64"},{"name":"title","type":3,"typeName":"String"},{"name":"doctor","type":3,"typeName":"String"},{"name":"hospital","type":3,"typeName":"String"},{"name":"record_type","type":3,"typeName":"String"}]}},"path":["health_ledger","health_ledger","HealthRecord"]}},{"id":2,"type":{"def":{"primitive":"u64"}}},{"id":3,"type":{"def":{"primitive":"str"}}},{"id":4,"type":{"def":{"variant":{"variants":[{"fields":[{"type":5}],"index":0,"name":"Ok"},{"fields":[{"type":6}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":5},{"name":"E","type":6}],"path":["Result"]}},{"id":5,"type":{"def":{"tuple":[]}}},{"id":6,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":7,"type":{"def":{"variant":{"variants":[{"fields":[{"type":0}],"index":0,"name":"Ok"},{"fields":[{"type":6}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":0},{"name":"E","type":6}],"path":["Result"]}},{"id":8,"type":{"def":{"composite":{"fields":[{"type":9,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":9,"type":{"def":{"array":{"len":32,"type":10}}}},{"id":10,"type":{"def":{"primitive":"u8"}}},{"id":11,"type":{"def":{"primitive":"u128"}}},{"id":12,"type":{"def":{"composite":{"fields":[{"type":9,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":13,"type":{"def":{"primitive":"u32"}}},{"id":14,"type":{"def":{"variant":{}},"path":["ink_env","types","NoChainExtension"]}}],"version":"4"}`;