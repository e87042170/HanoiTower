# HanoiTower 遞迴 - 河內塔

## 河內塔

河內塔（大陸：漢諾塔，香港：河內塔）是根據一個傳說形成的數學問題： 有三根杆子A，B，C。A杆上有N個(N>1)穿孔圓盤，盤的尺寸由下到上依次變小。要求按下列規則將所有圓盤移至C杆：
1.每次只能移動一個圓盤
2.大盤不能疊在小盤上面
 提示：可將圓盤臨時置於B杆，也可將從A杆移出的圓盤重新移回A杆，但都必須遵循上述兩條規則。 問：如何移？最少要移動多少次？

## 傳說

最早發明這個問題的人是法國數學家愛德華·盧卡斯。 傳說印度某間寺院有三根柱子，上串64個金盤。寺院裡的僧侶依照一個古老的預言，以上述規則移動這些盤子；預言說當這些盤子移動完畢，世界就會滅亡。這個傳說叫做梵天寺之塔問題(Tower of Brahma puzzle)。但不知道是盧卡斯自創的這個傳說，還是他受他人啟發。 若傳說屬實，僧侶們需要2<sup>64</sup> − 1步才能完成這個任務；若他們每秒可完成一個盤子的移動，就需要5849億年才能完成。整個宇宙現在也不過137億年。 這個傳說有若干變體：寺院換成修道院、僧侶換成修士等等。寺院的地點眾說紛紜，其中一說是位於越南的河內，所以被命名為「河內塔」。另外亦有「金盤是創世時所造」、「僧侶們每天移動一盤」之類的背景設定。 佛教中確實有「浮屠」（塔）這種建築；有些浮屠亦遵守上述規則而建。「河內塔」一名可能是由中南半島在殖民時期傳入歐洲的。

## 解答

如取N=64，最少需移動2<sup>64</sup>-1次。即如果一秒鐘能移動一塊圓盤，仍將需5849.42億年。目前按照宇宙大爆炸理論的推測，宇宙的年齡僅為137億年。 在真實玩具中，一般N=8；最少需移動255次。如果N=10，最少需移動1023次。如果N=15，最少需移動32767次；這就是說，如果一個人從3歲到99歲，每天移動一塊圓盤，他最多僅能移動15塊。如果N=20，最少需移動1048575次，即超過了一百萬次。 

## 解法

解法的基本思想是遞迴。假設有A、B、C三個塔，A塔有N塊盤，目標是把這些盤全部移到C塔。那麼先把A塔頂部的N-1塊盤移動到B塔，再把A塔剩下的大盤移到C，最後把B塔的N-1塊盤移到C。 每次移動多於一塊盤時，則再次使用上述算法來移動。

## 遞迴(Recursion)

遞迴是一種函式在函式本體內呼叫自己的程式設計技巧。遞迴是一種很"直觀"的設計技巧。會這麼說是因為有些特殊例子使用其他演算法，像是迴圈來解釋的話會十分複雜，但使用遞迴的話，演算法就會變得很直觀。最著名的例子大概就是河內塔了。 一般寫遞迴時都必須要特別注意結束條件，這很重要，個人認為遞迴是最容易不小心造成無窮迴圈的。 另外要注意的是，過於複雜的遞迴是很耗資源的，因為每一次的函式呼叫都占用一些記憶體來放置函式內的區域變數。而且如果遞迴佔著執行緒太久，可能會造成各種事件的處理延遲。如果結束條件沒設定好還會造成無窮迴圈。
上述是河內塔的遞迴應用，當n=1時，只要把盤1從A塔移到C塔，就完成解答。當n=2時，就遞迴下一盤(也就是盤1)，因為盤1要從A塔移到B塔，因此把B塔參數換到C塔，也就是ans1(n-1,a,c,b)，遞迴時就變成盤1從A塔移到B塔，在回來時印出盤2從A塔移到C塔，再遞迴1次把盤1從B塔移到C塔，因此變成ans1(n-1,b,a,c)，如此循環下去就是河內塔的解法。我們可以發現，不管有幾個盤，它的解法都是以最基本的2個盤為基礎去解，而它的最少解法就是2<sup>n</sup>-1。

## 迴圈與遞迴

迴圈的用法基本上是在一個已知數量的範圍內，把所有的程序執行一次。而遞迴是在一個未知數量的範圍內，把程序執行一次。因此，河內塔其實也可以使用迴圈的寫法來解，只不過利用遞迴來解，程式比較簡短，也比較容易維護。

由於遞迴能夠在一個未知數量的範圍內，遍歷範圍內的所有資料，所以在做檔案搜尋時，常會利用遞迴來寫，只要找到資料夾就遞迴，並且再找資料夾底下的資料夾，如此就能找到所有資料夾裡面的檔案。同樣的在寫搜尋引擎時，也可以利用遞迴來寫，得到網頁內容後並找出每一個網頁裡面的連結，如此循環便可以找出網路上所有的網頁內容。不過還要再排除已經造訪過的網頁，否則很容易造成無限迴圈。
