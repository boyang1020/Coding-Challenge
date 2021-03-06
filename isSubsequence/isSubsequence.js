// write a function called issubsequence which takes two stirngs and
//  checks whether the characters in the first string form a subsequence of
//  the characters in the second string.

function isSubsequence(str1, str2) {
	var i = 0;
	var j = 0;
	if (!str1) return false;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
}
