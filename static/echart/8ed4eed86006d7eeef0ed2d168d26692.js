(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('尤溪县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350426","properties":{"name":"尤溪县","cp":[118.190467,26.170171],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@A@@@@A@@AA@@@A@@AA@@@AA@@A@@G@@@@AA@A@@@@@AA@@@@AA@@@AA@@AA@@A@@A@@AA@@@@@AA@@@@@A@@@@@@@@A@A@@BAB@@A@A@@@AA@@@@A@A@@@@B@@@@@@@BA@BBBB@B@@@@BB@@@B@@@B@@@B@@@@AB@@@B@@AB@@@AA@@@@@@@@@@@@@A@@A@@@@@B@@A@@@@@AA@@A@@@@@@@@BB@@@@@@BB@@@@@@B@@@@@BB@ABBB@@B@@@@@@B@@@@@B@@@@@@@B@@@B@@A@@@@A@@AB@@@@A@@A@BA@@@ABA@AA@@@@A@@BA@@@@@A@A@@@@@A@A@@@@@A@@BA@@@@AA@@@ABA@@@@@@@A@@@A@A@@B@AA@@@A@@B@@@BA@@@A@@@@B@@@@@BAD@@@@A@@D@BA@@@AB@@@@@B@BB@@@@@@@@@B@@@B@@@B@@AB@B@@@@B@@@B@@@@@B@@AB@@@@@@@B@@A@@@@B@@@@@@AB@@AA@B@@@A@@@@@AA@@B@@AB@D@D@@@B@@@B@B@@A@@B@@@@AB@@ABA@@@@@@@ABA@@@@BA@A@AB@@@@@@@@A@A@A@AB@B@@B@@@B@@@B@BB@BB@@BB@@@@@DAB@@@@@@BCB@@@B@@A@@@ABAD@@@B@@@AB@B@B@@@@@@BAD@@@BB@@@BB@@B@@B@@B@@@BBBB@@B@BBBDBDBB@B@B@@@B@@B@@@@B@D@@B@BB@@B@@@BAB@@@@B@@@D@@@@@@B@@@B@@@@@B@B@B@BB@B@@BBB@@@@BBB@@B@BB@@@@BAB@@B@@@@@B@B@@B@@B@@@B@@@@@B@B@@@@@D@@@@@D@B@B@B@B@@@@@@@B@@@@BB@@@@@B@@@@@@@B@@@@A@A@A@C@@@@@@@@B@B@B@@@B@@@@BB@@@@AB@@BD@@@BABA@A@@@A@A@CB@A@@@AA@@A@@AA@@@@A@AB@@@B@@BB@@@@@B@B@@B@BBB@BD@@B@BBB@B@@B@@@B@@BBB@@@@B@B@@@B@@B@B@BAB@@@@C@@@AB@B@B@@A@@DC@A@@@@@ABAFABADADA@@B@@@@B@@@BB@@@@@BCBAB@@@B@B@@@BB@@BD@DB@@@@BB@@@B@@@@@@@@@@@B@@@B@@@B@@@@ABADA@@@@B@@@B@D@FD@@@B@@B@@@@BB@@AD@@@B@@@@BAB@B@@@@B@@ADB@@BBBB@@@B@B@@@@@@@@B@B@B@@AB@@@FA@@B@BA@@B@@A@@@@@A@@@@@@@AB@B@@@@BB@@@B@@@@B@@@@B@@B@@B@@B@@@@@B@@@@@@BB@@B@B@@A@@B@BA@@@@B@@@BA@@@B@@@@B@@BB@@@@B@@B@BA@@A@@@@A@A@@@A@@BAB@@AB@@B@@@@AB@BB@@@B@B@@A@@@B@BB@@B@B@B@BBDB@@BDB@BB@@@@B@@@@@@@@@B@@@@@@@@B@@B@@@B@@@@@B@@A@@@B@@B@@@@@@@@BB@@B@@B@@B@@@@@@@AB@@@@@@BB@@@@B@@@@@@BB@@@@@@@B@@B@@BB@@@@@@BBA@BB@@@@B@@@@BB@@BB@@B@@@@@@@@BB@BB@@@BBD@@@BBBD@@AB@B@@@@@B@@@@@BA@A@@B@@C@@@BB@B@@@@@B@B@@BB@@F@B@BBB@BBB@@B@@@@@@BB@@@@@@@@BB@@@@@@@@B@@B@@B@@BB@@B@@@@@@@@@BAB@B@BAB@BABAB@@@@@BA@AB@@@B@@@@@@@B@@@B@@BB@B@@@@B@@@@A@@B@@@B@@@BA@@BAB@BA@@BA@@B@@ABAB@@@BAB@@@B@@BAB@@@B@BBD@@BBBB@@B@@@B@@BBB@@@B@@@B@@@B@B@@@@BBD@B@FCBB@@BB@@D@@B@@B@@@@@BB@@@@B@BB@B@@@@BBAD@@@B@@B@@B@BB@@@B@@@BCBADABABBB@@B@@B@@B@@@@@@B@@@B@@@@ABA@@@AB@B@@A@@B@@@@@B@@@@@B@@BB@@@@B@@B@@B@@@BB@@B@@@B@@A@@BA@@B@B@@@B@@@B@@@@B@@BBD@B@@@BBA@BB@BAB@B@@@BA@@@BB@@B@@@@BB@@@@@@BB@@AB@@AB@B@@A@A@@B@@AB@@@@B@@B@@B@@BB@BA@@BB@@B@BB@@BB@B@B@B@BBB@@B@@@B@@@@A@@A@@AB@@A@@BA@@@@D@BB@@@@@BB@B@@@@@@BB@D@@@@@B@@B@A@@AC@@BABEB@BA@@@A@@@@@@B@@@@@@BB@B@B@@@@@@ABA@A@@@A@@@@D@BAFA@@@@@@@A@A@A@@@@@@B@@@@@BA@@AA@A@A@@@@B@B@B@@@B@B@BB@BBB@@DBD@D@D@B@B@DB@@B@B@D@D@BA@@B@@@B@@@@B@@BB@B@@@@@B@@@BB@@@BB@@BB@@@B@@@@D@@@@B@D@@B@@@@D@B@B@@@B@@@@@@@B@@@B@@A@@B@B@@@BBB@@@@BB@@@D@B@BB@@@@@B@DAD@BA@@@@@@B@@AB@BAB@@@@@@@B@BABC@@BABABA@A@@B@@B@@BBBBB@@@DD@@BB@@B@B@@@B@@BB@B@BB@B@B@@@B@@BB@@B@BBB@@BB@BD@@@B@@BD@B@@@B@D@B@F@@B@@B@@@B@@AB@@@B@@@@@BB@@@ABAB@B@@@B@@B@@B@@BB@@@B@@BB@@BBBAB@BB@@@@B@@@BAHC@@@BB@B@@@BB@@B@BABA@@BA@@B@@BBB@@B@@@BA@@BAAC@@@A@A@A@@@CAAB@A@@A@@@A@@B@@@@@BA@B@@BA@B@AB@@B@@@@@BB@@@B@@B@@B@@@BD@@BB@@@BB@BBBBB@@@B@@@BB@@BB@@@@B@BB@@BB@@@BB@@@BBB@@@@B@@B@BA@@B@@AB@@@B@@A@@@AB@@BB@@B@@BB@@B@BAB@B@@@BB@@BB@@AD@@@B@@@BA@B@@@@BB@@@A@@BB@@B@@@BB@@BD@B@FB@@@B@D@BB@B@@@B@B@@@@@@@@A@@AC@@AAA@@@@AB@@AB@@@B@@@B@@BB@@@@@BA@@@AB@@@@@@@B@B@@A@@B@BCBA@@@AB@@AB@B@B@BB@@BB@@B@BBB@@@@@B@D@BBB@@@@@B@BBB@BB@@B@@@@B@B@@BB@@BB@@@B@@@@DA@@@@BB@@D@@@@@B@@B@@@@@B@@@@BBB@@@@@@BAB@B@@@BA@@B@B@@@@BB@@ABA@@@BB@@BB@@@B@@@@@@@BB@@B@@@BBB@@BA@@@@B@BAB@@A@@@@@@BD@@B@@B@@@@AB@@@B@@@@@@B@@@@@B@@@BADE@A@AA@@A@@B@@@B@@@@@@@D@B@B@@@BA@A@@BB@@@@B@@B@@B@BAD@@@@AB@@@B@@@@@B@@@BB@@@@B@@@@@@A@AA@@A@AAAA@@@@@@A@AA@BA@@@@B@@B@@@@BA@@B@@@@@@@B@@A@@BB@@BAB@@@B@B@@B@@B@@AB@@@FA@@@ABBB@@@B@@BB@@BBBB@@BB@@@@@B@@@@@B@@B@@@@A@BB@B@B@@@B@B@B@@@@CB@@@@AB@@@B@BA@@B@@AB@@@BBB@B@@@B@@@B@B@@@@A@@B@@BB@AB@@@@AB@@AB@@@@@@@@AB@@@@@B@BAB@@@B@@B@BB@@@@@@@B@@BB@B@@@@@A@@B@@@B@@BB@BB@B@@@@@AB@@AD@@@BB@@B@@AB@B@B@@@@@BB@B@BA@@@AB@@A@@@A@@@A@A@A@C@@@@@@BB@BB@BB@B@@B@@@@@BB@@@@@@BB@BB@@@@@BBB@@@@@@B@@B@@B@BB@@@@AB@@@@A@@@@AA@@AAAA@@@A@@A@AA@@@A@@AA@@@A@@@@@@B@B@@@@@@BB@@ABA@@@A@@@A@@@A@@@AB@BABA@@@@B@@@@@B@@@BB@AB@@B@@B@@BB@@@BBB@@BB@@@B@@@B@@@BB@@BB@@@@@BB@@@@@@B@@@@@@ABAB@@@@@B@@BB@@@@B@@@@B@@@B@@@@A@AB@@@BA@C@@BB@B@@BBBBBB@BBB@@BFB@@BB@@B@@@@AB@@CB@@@BAB@@A@@CA@A@@@@@@BA@@BBBAB@BBB@B@B@@AB@@A@@B@@@D@B@@@B@BB@@@@@@@B@@@@@BB@@@@@BB@@@@BB@@B@@BB@@BD@@@BB@@B@@BBB@@@@BAB@@A@@@@AC@A@A@A@@@@@A@@@@@@AA@@A@@@@A@A@A@@@A@@@A@@A@@@@@@@A@@AA@@@@@@@A@CB@AA@AA@@@@A@@AA@@A@A@AAAA@@A@@@@@A@@@A@@@A@@B@@@@A@A@@@@BAB@@ABABA@ABA@@@@B@@@BBB@@@B@B@@@B@@@@AB@@@@B@D@@@BB@@B@@@@BA@AB@B@@@B@@@B@@@@A@@@@B@B@@@@BB@@@AB@@@@@@B@AB@@@@@B@@@@@B@@@BBB@@BB@@B@@@@@B@@@BABA@CBA@A@A@@@A@@@ABA@@@A@@@A@@@AB@@A@BB@BAB@B@@AB@@@B@@BBBB@B@@@B@B@B@@@AA@A@@@@@@@AB@@A@@@B@@B@@@@BB@@@B@@BBB@@BBB@BB@@@@B@B@AB@@@B@@@B@B@@@@B@@@B@B@@AB@@AB@@@@@B@@A@@B@BAB@B@@@DAB@@@@A@@A@@@BA@@@ABC@ABAB@@@@A@@B@@A@@B@@@B@B@BA@@B@@@B@@@@AB@@@B@@@@AB@@BB@@@@@@@B@BA@@BBB@@AB@B@@@@@B@@@@BB@@@B@@@@@B@D@@AB@@BB@@B@BB@@@@B@@B@@@@@DA@@BBB@B@@@B@@BB@B@@B@@B@@@BAB@@@@@BA@@@A@@DB@@B@BB@@D@@AB@@@@@B@B@B@D@@@BB@@B@@@@@@A@@BABA@@B@@@B@B@D@@BB@@@BB@B@@@B@@@D@B@BBBB@B@B@D@@@@A@@@A@A@AAE@@BEB@@ABA@@B@@A@A@C@@AA@@@A@A@@A@AA@AAAA@@A@@A@ABCBABABCFAB@@ABA@@BCBA@@B@BA@@@AA@@A@@AA@@A@@@AB@AAA@@AA@AA@@@@@@AC@@A@@AAA@@@A@A@@@A@A@@@A@@@A@A@A@A@A@AB@ACBA@@@AB@BAB@B@@@@@@A@A@A@@@A@@BA@@BA@A@@BA@@@@B@BA@@@A@A@@@A@@@A@@B@@A@@@@DAB@B@@@DAB@B@BAB@B@BAB@B@@AA@@@@A@AB@@A@@@AB@@@AA@@@A@@@@BA@A@@@A@@@AB@AA@@B@@@B@BBB@@@B@DD@@B@@@@@@BDBBB@@B@@@B@B@B@@@B@@DBB@@@@BB@B@@@@B@B@@@@@BBB@B@@B@@BB@BB@@@BB@@B@@@B@@@BB@@BBB@@@B@B@@B@@@@B@B@@@@@@BB@D@@@@BB@@@B@@@@@@B@@@BB@@BBB@BB@BBB@@BB@BA@@BB@@B@@A@AB@BA@ABA@A@A@@BA@AB@@@B@B@@@B@@@B@@@@AB@@@@@B@D@BBB@BAB@BA@@@@@A@A@@@A@@@@B@@@B@@@B@@@BAB@@@B@@@@A@@@@@AAB@@AA@@ACAA@@@AB@@A@A@@BA@@@@BA@C@AB@@@@ABA@@@@B@@@B@@@@@B@@@@@BB@@@@@@B@B@@@BA@@B@B@@@B@B@@@D@B@@@B@@B@@BABA@@@@@B@@@BABA@@BA@@@BBBDB@B@@@@@@@B@@B@@@@@@@@DA@@@@B@@AB@@@@B@B@@BA@@B@@@@@@@@B@B@BB@@@BA@@B@@A@@BABBB@B@@@B@@@@@BAB@@@@AB@@A@A@AB@@@BA@@B@@@BA@@B@@A@@@A@@@A@@@@@A@AB@@@@A@@@@@@AA@@A@@B@@@@AA@AA@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@B@@@@@BAB@@@BB@@@C@@B@BA@@@@@@B@@@DBB@@B@@B@@BB@@@BBB@@@@AD@@@@ABBB@@@@@BB@@@@@@BA@@@@@@@AB@@@@@BA@@B@B@@@@@@@@@@BB@@@B@BB@@BA@@@B@@BA@@B@B@@@B@@@@@B@@@@@@B@@B@@@@@AC@AA@@A@@@AAA@@A@A@@@A@@A@@@@BAAA@@@@@@BAB@@A@@B@@AB@@@BA@@@A@@B@@@@@B@@@@A@A@AA@@@BA@@@@@@@@BA@@@@BA@@@@@@@AB@@@BA@@B@@@@@B@@@BA@@@@@@@BD@@@BB@@AB@@B@@@B@@@B@@@B@@CB@@@BA@@@@@AB@B@@@@AB@@A@A@ABA@A@A@@@@@A@A@C@A@A@@@@B@@@@@@@@@B@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@B@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@B@@@@A@@B@@B@AB@@@@@@@B@@A@@@@B@@@B@@@@A@@B@@@@@B@@@@@@B@@B@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@A@@@@@@@A@@@@B@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@A@@@@@A@@@@B@@@@A@@@@@@@@@A@@@@@@@@@A@@@@B@@@@AA@@@@@@A@@@@@A@@@A@A@@@A@@@@@@BA@@@@B@@@@@BA@@@@@ABA@@@@@@@@@@@@@A@@@@B@@A@@@@B@@@@@B@@@@A@@A@@@@A@@@@@@B@@AB@@@@@@@@@@@@@BA@@@@@@D@@@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@B@BA@@B@@@BA@@@@@@@@@@B@@A@@@@@@BA@@@@@A@@BA@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@BA@@@@@@@@@@B@@@@@@A@@@@@@@@@@@A@@@@@@@@@AB@@@@@@A@@@@@@BA@@@@@@@@@@@@@A@@@@@@@A@@B@@@@@@@B@@A@@@@@@@@B@@A@@@@B@@@@A@@B@@@@@@@BAA@@@B@@A@@@@@@@AB@@@@@@@@@@A@@@@@@BA@@@@BA@AB@@AAC@@AAA@@@A@@@A@@AA@@@@@@A@A@A@A@@@CA@AAA@@AA@@@@@ABAB@@@BABEAAAA@@AB@@A@@A@@ACA@AAA@@@@@@@BA@A@C@@@@BA@@B@B@@@@CB@@@BA@@@A@A@A@AAA@@@A@@@@@@B@@@B@@AB@@@@@@@B@@@@@@@B@@AA@BA@@@@B@@A@@@@@@BA@@@A@@@A@CAAAA@AB@@A@A@CAC@A@A@AB@@CBA@@@A@A@A@@@@B@@@@A@@@AACC@ACA@@AA@@AAAAAAAAC@@@@AAABAB@FAB@@AB@@AB@@C@CB@DCDCD@BCBA@@@@AA@AAAAA@A@@@A@@A@@@ABABABABABA@A@ABC@@@@@AA@A@AA@@@@@ADA@@B@@A@A@A@@A@@A@A@A@@@ABA@@@AAC@@AA@@AB@@A@@@AA@A@@@AA@@@A@@C@@@@@AB@@A@@@@A@@@@@A@@@AA@@@@@BA@@@AA@@A@@@A@AB@@@B@@AA@BA@@AA@@@CA@AAAA@@@A@@@@@AAA@@@AA@@AB@BCBABADC@@@A@@@ABA@@@@@@@A@@@A@A@@A@A@AA@@@@A@A@A@ABABCBABA@A@A@A@@@@A@A@@@A@A@@@CA@@A@CA@BABA@@BABA@A@@@@@AAA@A@A@A@A@AA@A@@AA@@@@AA@@@@A@@DA@A@@@A@@@AA@@ABA@@@A@@@A@@@A@@@@@A@@BA@@AA@@@A@A@@@A@@@AA@@@AAB@@@@@@@B@B@BA@@@ABA@@@ABAB@@@@@B@DC@A@@B@@@B@@@@@BB@@B@@@BA@BB@@@B@@@B@@@B@@BB@@@BBB@@@@@@@BB@B@@@@BB@A@@B@@AB@@A@@@@A@@@B@@A@@@@@@@@@@@A@@@@A@@@@@@@@@@@AA@@@@@@@@@B@A@@@@A@@A@@@@@@@@@BB@@@@@@A@@@@BAA@@@@@@@A@@@@@@@@@@@AA@@@@@A@@@@B@@@@@@@@@B@@@@B@A@B@@@@B@@@@@@@@AA@@@@@@@@A@@AC@@@@@@@AA@@@@@@A@@@@@@@A@@@@@@@@@A@@BA@@A@@@B@@A@@@@A@AAA@AA@@@@@AAA@@B@@@B@@ABABC@A@@AA@@@A@@@AA@@A@AAAB@@@@A@A@@B@@A@AB@BA@A@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@B@@B@@@@@@@@@A@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AAC@@@A@@@AB@@A@@@A@A@A@@@A@A@ABA@A@@@A@@@@AA@@@@B@@AB@@AB@BA@@@@B@@@B@@@BBB@BB@B@@B@@@B@@@@AB@@@BB@A@A@A@@@A@A@@AAA@@A@@AA@@A@AA@@A@@A@@@@AAA@A@@@@@AA@@@AAA@@@@BA@A@@B@@A@@@@@AB@B@B@@@BA@@@AB@@@BABA@AA@@@A@@@AA@@A@@ACAC@@AA@@BA@AB@@AB@@@BA@@BA@@@@@@B@@A@A@AB@@@@@B@B@@@BA@AB@@A@A@@@A@@A@@AB@@CBA@A@@@A@AAE@@@AA@@A@@@@@@@A@@@AAA@A@A@@@A@A@@@@@A@A@A@A@A@@@AA@@C@A@AAA@A@A@@BA@@@@AA@@AA@A@C@@@A@@@A@A@A@ABA@A@@@A@AB@@@@A@@A@@A@A@AA@@@A@@CBA@@@CBA@A@@@A@A@A@@@A@@BA@@@@B@@A@AA@@@@@ABA@A@A@@@@@@@A@@@@@AA@@AB@AABA@BBA@@B@@A@@A@@ABA@AB@@@B@@A@@@@@A@@@@@AB@@@@AAAB@@@@A@A@@AA@@@A@@@A@A@E@A@AB@@AAA@A@@A@AA@AC@A@@A@A@A@@@A@@AA@@@@BA@@B@@@@A@@A@BCAA@AB@@@@A@@@@BA@@@A@@A@@@@@@@A@@@A@A@@@AAB@@A@@B@@A@@@@@@BA@A@AA@@@@@A@@@@@@@A@B@@AB@@@B@DABA@A@C@A@@A@BA@A@A@@@@@AB@@A@C@A@@@AA@B@@AB@@@BACAAA@@BAAA@ACA@@@A@AA@@AA@@A@AA@@AAA@@@ABBB@B@@A@A@@@A@@B@@@@A@@@A@@BA@@BB@@@A@@@@@AAA@@@@BA@@A@@@@A@@A@@A@@A@@@@@@A@A@@AA@@B@@A@@@@@A@@@@A@@@BA@B@@BAB@AA@@@@@@@A@@B@@@@@BA@@BA@@@C@@A@@B@AA@@A@A@@B@@@@C@@AA@@@AA@@@BA@@AA@A@A@@AB@@ACA@@@BA@@@AAA@@@@B@@A@@@A@@@@AA@@@A@@@A@A@@@@@@@@@AAA@@B@@@@ABA@@@AA@@@@@B@B@BBB@@@BB@@BC@A@@@@@@B@@AA@@AA@@A@@@A@AACAA@AAB@AAA@@@AA@@AAA@@@A@@A@A@@@A@@@@C@@@@@A@A@@@@@@AB@@@A@@@@BABC@A@@@@@@@A@A@@@AAA@@@@CAA@@A@@@AB@BB@@BA@@@ABA@AAA@ABA@@B@BA@@B@@@@ABAAAB@@@@AD@BA@@BAAA@@@@AAA@A@@@A@C@BBB@@B@B@B@@A@@@@@@@@@AB@@@@@@B@@@AB@@@@@@A@@@@@@B@@BBA@A@@@AB@@@@@@@B@@ABB@@@@B@@GAC@A@A@A@@@ABA@@@@@A@@@@@A@A@AB@@A@@@A@@@CA@@AB@@A@@@@@A@A@@B@@@@@@A@@B@@@@ABA@@@A@@B@@B@AB@B@@A@@@@@A@A@A@@AC@AAA@AA@@AAAA@@@@@@@AAA@A@@@ABABABCBAA@@@BA@@@@A@AA@@@@AA@@@@@AB@@ABA@@DCB@@@A@@A@@@A@@@A@A@A@A@A@@@CA@@@@@@@@A@@@@@@@A@@@@@@AAB@@A@@@AA@AA@@@B@@AC@@@BA@AB@@@@@@@AAA@@@@AB@@AB@@AAA@@@AB@@@@A@@A@@A@@A@@@@@A@A@@A@@@@AAA@@@@AA@B@@@B@@@B@@@B@B@BB@@@@@@B@@@B@B@@BD@@@B@@@@@B@@@B@B@@@BB@AB@BB@@B@B@@BBA@@@BB@@@B@@@@@B@B@B@BBB@B@@@B@@@B@BBB@B@B@@@@@@AB@@A@ABA@@B@BA@@A@@@AA@@@AA@@@@ABA@@BA@@@@BA@@B@BAB@@@B@@B@@B@@ABGD@BA@@BC@A@@@A@@@@@@B@@@BAB@@C@@B@BC@@BAB@@A@A@@B@B@@A@A@A@@@@B@@@@@@AAAA@@@AAC@@@AA@@@@AA@@AA@@@AA@AAA@@@@A@A@@@AA@@@A@@CC@A@@A@AAAAA@@@@A@EBA@@@ABC@@@C@AA@A@@BA@A@@B@@AB@@@A@@AA@AA@A@@AA@ABABAAA@@@@BA@@B@@@@@BCBABE@@BA@@@ABC@AB@B@@A@@B@@A@AAA@AA@@EAA@@@A@ABC@@@A@@@C@C@@@@@@ABA@@B@B@B@@@@@CCCACAA@@@A@CBC@B@ADBB@@A@@B@B@@@BABBB@@@BDB@B@B@@A@@@A@@@A@AB@@@B@@@D@@@B@B@@@@@B@@@BA@@@@@@B@@A@@B@@A@A@@@CB@@AB@@AB@@BB@BB@AD@D@@@B@@BBA@@@@B@B@@AB@B@BABA@@BCBB@@@AB@BC@@@@@@B@@@B@@@@@@BB@@A@@@@@ABA@C@@@A@B@@A@@A@@A@@@A@@A@@@A@@AA@A@A@A@@@@@A@@@@@@A@C@A@A@A@@@AA@@A@AA@AA@@@@@A@@@A@A@@@AA@@A@@@A@@@@@A@@A@B@@A@@@@B@@AC@CA@@@@BCB@AA@@A@@@A@C@CB@@@@CBAAAAA@AA@@A@A@A@A@A@ABA@@@@@@BABA@@@A@ADAB@@@B@@A@@DBDA@@BA@@@@BA@@@AD@B@@@DAB@@A@@@AB@BA@@@AA@AA@@CA@AC@@@@A@A@@@@@A@@AAA@A@@@@AA@@CC@@ABABA@A@@@@@AB@BAB@B@B@B@@A@CD@B@@A@A@@AA@C@A@AB@@@@AA@@A@A@AB@@A@@@@@@@A@@AB@@ADA@@@AC@ABA@@@A@@A@@@@@ABA@@B@@AA@@AA@@@A@@AA@@BAA@@@@@AA@@@@A@@@@@@@AA@BA@@@@AA@@A@@@BA@@@A@A@@@A@@@ABBB@@A@@B@@B@@@AB@@@@@BABCAA@AAAA@@@@@@A@@BAB@@@BBB@@@BB@@B@@A@@@@A@@@BA@@@@@@@@@A@@AAA@@@@@AA@AA@@@@@BA@@A@@@A@@@@A@@A@@@@AA@@ACAAAA@@@A@@@@@@DAB@@AB@BA@@@A@CAA@CAC@@AA@@A@@A@@@AB@AA@AAA@@@@A@@@@@A@@@AA@A@@@@AAAAAC@@@AA@@@@@@AA@@AA@A@@@@@A@@A@@@A@A@@@A@AA@@A@@@@B@@@@A@AB@@A@@@A@@B@BA@@B@@@@A@A@@BA@@@@@@@ABAB@BA@@BA@@B@BA@A@@@@@@BA@@@B@@BB@C@A@@AA@A@@@@@A@A@@BA@A@@@@@AB@@@@A@@BA@@@@@AA@@AC@@@@@@@@A@@B@@A@AA@@@@@@@C@@@@BA@@@@@A@@@@@AA@A@@A@@@@B@@@@@@A@@AA@@A@@@AA@@AA@AA@@@A@@AAAA@A@@@A@@AA@A@@@A@@@A@@@AB@@A@CBA@@@A@@A@@A@@A@@@@C@A@@@A@@@@@@@@@@@@@@@@@A@@@@B@B@@@@@B@@@BAB@@@B@@A@A@@B@@@BBB@B@@@BB@B@B@B@@@@@@B@D@BBDA@@@@@AB@BAA@@A@@@@@AAC@A@A@AB@@A@A@@@ABA@@@@@@@A@@@@@@B@B@B@@@@@@@B@@@B@@BBA@@@A@@@A@@AA@AA@@A@@@C@@@A@@@ABABA@@AA@@AAA@@AA@@@@A@@@@@AA@@A@@A@@A@@A@@A@@A@@A@@AA@CBA@A@A@@@A@A@@@AA@@AAA@@@@@@A@@@A@AC@AA@B@@A@@B@@@@A@@B@@@D@@AB@@A@A@@@AAAA@@AA@@@@A@@@A@@@ABAA@@A@AAA@CA@@@@AAA@@@AAA@@@AA@@@@@A@A@@@A@A@@A@@BA@@BA@CB@@@@A@@B@@A@@@AAA@C@@C@@@ABA@@AC@@@@@@C@A@A@@@A@@@@A@@A@@@ADA@ABA@AB@@@@@A@A@A@@@C@@A@@BA@A@CA@@A@@@A@@@@BAB@@A@ABA@@A@@ACAC@A@AAA@@@@@A@@@@@@@AB@@@@AB@D@@AB@@ABAD@@AB@@@@@B@@A@@@A@A@@@@@A@@BB@@B@A@B@BA@@A@A@A@@A@@@@@A@@@@@@@@@A@@@@A@@@A@@@@AA@@@@B@@A@@AA@@@A@A@@@@A@@A@@AA@@@A@@@AA@@@@AA@@@@@AA@@@@A@@A@@@@A@@@A@@@A@A@@@@@AA@@@@AA@@@A@@AA@AA@ACA@@C@A@A@C@AB@BAD@@@B@B@@AB@@B@@BA@@@A@CBCBABA@@@@@A@CB@@AA@@@@@AA@@@CC@@A@@@A@@@CA@B@@AB@@A@ADABAB@B@@@@ABA@@@A@A@A@A@@@@A@@A@@@@AA@@A@A@@AA@@A@A@@@@@@@A@A@A@@AA@@B@@C@A@@@A@A@A@@AA@@@A@BA@@@AB@BC@@B@BA@@BA@@BC@ABA@A@A@@@@B@BAD@@@BABA@@BA@@@@@A@AB@@@HEB@B@@AB@@A@A@ABA@@@AAACC@AAA@@@A@@@A@@A@@@@B@@@@@B@BBF@B@@@@@B@@B@AB@@@B@@A@ABA@CBC@A@A@ABAB@@@@@B@@A@@@ABAA@@CB@@@@AB@@@@@@@BA@@@A@@@AB@@A@AAA@@AA@A@@@AB@AA@A@@B@@@@ABA@A@A@@@C@@@@@@@@BAB@BABAB@@@B@@@B@B@B@@A@BB@B@@@BA@@@BBB@@@@D@BAB@@@B@@@@AB@@@@@B@@@B@@@B@@B@@B@@@@@B@@BBA@@B@@BB@B@@B@@B@@@B@@@@@B@@@B@BBB@B@@@D@B@@@@@B@B@@@@@@@B@@@B@@@B@@@D@B@BA@@@A@C@@@@B@@@D@B@D@@@BA@A@@@@DABAB@@@B@@BB@@@BB@B@B@@BB@@@B@@BBB@@@@B@BBF@@@BB@BB@@BB@@@B@@@B@B@@@@@BBB@@B@BBBBD@@@BAB@@@@@@BB@@AB@@@B@@@@@@@B@@AB@@@@@D@@@@B@@@@BBB@B@@@B@@@B@@@@@B@@@B@B@B@B@B@BB@@@@B@BB@@@@@@BB@@@B@B@@@@B@BBD@B@@@@@BBDA@BB@@@BBB@B@B@@@D@BABBD@B@@BB@@B@@@@B@@@@B@@@@BB@@@@@B@BB@@@@A@@BA@@@@@@B@AB@@@F@@@@@B@B@@BB@B@@@B@B@@@@@B@@AFA@@@@@@@DA@@@@@BB@@@B@@AB@@@B@@@@@B@B@@A@@@@@A@A@@@@BA@@BB@ABB@@B@@A@@@@BA@@BB@@@@@@B@B@@@B@@@@@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@BB@@@@A@@B@@@BBB@@@B@@@@@@@@@BA@@@@@BB@@@@@@@B@@A@@B@@@@CB@@AB@@@BA@@BA@@@@BA@@@BBBB@@@B@@@B@@@BB@@B@@@BA@@B@B@@@@@@AB@@@@BB@@A@@BA@B@ABAB@D@B@@@@ABA@C@A@@A@@@AA@@@@C@@A@AA@@@@AACAA@A@@@AAC@A@@@@@@A@@@@A@@@@@@A@@BA@@@@@A@A@@@AB@@A@@@@@AB@AA@@@@@A@@@@@A@@@AA@@@@@A@@@A@@@AA@@A@AB@@@@A@@AA@@AA@@AA@@@AB@@A@@@ABA@@AABAA@@A@@@@B@@AB@@@BA@@@@BB@A@@B@@A@@@AB@@ABA@@@@BA@@BCB@B@@AB@@@@@BA@@@@@A@@@@A@@A@@A@@A@@@@@@AA@@A@@@AA@@@@@A@AA@BA@@@A@A@@@AA@@@@A@AAA@AA@@A@@A@A@A@@@A@A@@A@A@AA@@@A@A@@@@@@A@@A@A@@@@@A@@@AAAA@@@@@AB@@@@@BA@@@CAAA@@@@A@@@@@@@@CA@@A@@@A@@A@B@@A@@@@@A@@AB@@A@A@AA@@C@@@@@AA@AA@@A@@A@A@A@@@A@@AAA@C@A@AA@A@A@@@A@A@A@@@AA@@@@A@@@@B@BA@@@A@@B@BA@@@@BA@@@A@@@@B@BA@@@@B@@AB@@@@@B@BA@@@A@@@A@@A@A@@A@@A@@@A@C@@@@AAA@AAAAA@@B@@A@@BA@@B@@@B@B@@@BA@@BBB@D@@@BB@@B@@@@A@@D@@ABA@@B@@@B@@A@@@A@AB@@B@@BAB@D@BCBADABA@A@@@A@@BA@@BAD@@A@@@AB@@C@A@@@@AA@@@@A@@AA@@@@@C@@@@BA@A@@A@A@@@A@A@A@@A@@A@@A@@@@A@A@@@A@A@@@@@@@@BA@@B@B@BA@@BA@@B@@AB@@A@@@A@@@@@@BB@B@B@@BB@@BA@@@A@@BB@BBAB@BA@@B@@AB@@@B@@@BB@@B@@@@BB@@@@B@@@@B@B@@@B@@@@@@@BB@@@BBBB@@D@@B@@B@@@@B@@B@@@@@BB@@@@BB@@@@B@@@@A@AAA@A@@@@B@@@B@BB@@B@@D@B@@@@@D@@@B@@@@BB@@B@B@@@@D@@B@@@BB@@@@BB@@A@AB@@@@@@ABA@A@A@@@B@@B@BB@@@@@@BB@@@@B@@@@@@@B@@B@@@B@B@B@B@@AB@@@@A@@B@@@@B@@@B@B@@@B@@@@@D@@AB@@A@@@@@@B@@@@BB@@@@@@@B@@B@@B@@@@@BB@@@D@@@@BAB@@@@A@@@@BA@@@@@@@@@ABB@@@BBD@B@B@BB@@@@@@B@@@ABB@@@@@B@@@@A@B@B@@@BA@@@@B@@@B@@@@AB@@A@@@BB@@A@@@BB@@@BB@@B@@@@A@@BB@@@@BB@@@@@@BB@@@@B@@B@ABB@@@@B@@@@@B@@@@@B@@@@@@@BA@@@@B@@A@@@A@@@A@@B@@@BA@@@@B@@@@@@@B@@AB@@A@@@A@@@@@@B@@@@@BA@@@@@B@AB@@@B@@@B@@@B@B@@@B@@@B@@B@B@@@B@@@BAB@@@@@@B@@@D@BB@@@@B@@AB@@A@A@@@@BAB@@@@@B@@@B@@@@@BB@@@@B@@AB@@@B@@@@@BA@@@@B@@@@@BA@@BA@@BA@@@@B@@@B@@@@@BA@@@AB@@@BB@@@@@AB@@@@@@B@@BBB@@ABB@@@@@@BA@@B@@BB@@@@@B@@@@A@@@A@AA@B@@AB@BB@B@@@BAB@B@BAB@@@@B@@@@@@@@@@@@@@@@@@A@@B@@@@@@@B@@A@@@A@@A@@AB@@@@A@@A@B@@@@ABA@@AA@A@@D@@@@A@@@ABA@@@A@A@@@A@@@@@@@AAC@A@A@@@@@@A@@@@@@@A@A@A@@B@@@A@@A@@A@@BA@@AA@@@@A@AB@BAB@A@AA@@C@A@@BA@CAA@@@B@AB@@A@@B@@@B@BAAA@ABA@@@@@A@A@A@@@A@@@@B@B@@AB@@@B@B@BA@@@"],"encodeOffsets":[[120699,26750]]}}],"UTF8Encoding":true});}));