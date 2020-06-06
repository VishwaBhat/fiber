window.BENCHMARK_DATA = {
  "lastUpdate": 1591463049611,
  "repoUrl": "https://github.com/Fenny/fiber",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "a327b3f3568baba916dcbe0e465046ab950b4648",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:03:54+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/a327b3f3568baba916dcbe0e465046ab950b4648"
        },
        "date": 1590221127681,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5908,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8046382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 66.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17356180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 87.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13189620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18025490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 308,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3887755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 93.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13916310 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7894350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8788046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8178201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 492,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2451261 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1832,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "726921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 191,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6408763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9348828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 51.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21001200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45884270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 136,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8740178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 460,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2529094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 606,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2011128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 231,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5120035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 239,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4547926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27742423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9352356 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 290,
            "unit": "ns/op\t     268 B/op\t       4 allocs/op",
            "extra": "5058030 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1219,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "834403 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 256,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4781695 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1070,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 60.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17040109 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "900676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "971652 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 967815,
            "unit": "ns/op\t     157 B/op\t       2 allocs/op",
            "extra": "1279 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5662,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197924 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "208052 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 161,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7448835 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "aec1bfccf0feb8b46a32fd5346ae03718557cea2",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:19+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/aec1bfccf0feb8b46a32fd5346ae03718557cea2"
        },
        "date": 1590221158280,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6882,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6944904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15359299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11851038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14980516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3476216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 104,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11686802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7630262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7259845 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7401229 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 556,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2164884 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2086,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "501114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5705665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8344276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18665475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38710495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 150,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8039445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 510,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2316861 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1759981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4757036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 277,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4455441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24284116 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8240382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 312,
            "unit": "ns/op\t     248 B/op\t       4 allocs/op",
            "extra": "4479597 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1390,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "743244 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1331,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "904795 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 295,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4058607 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "904572 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16416525 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1309,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908965 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "864550 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1098255,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1100 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6648,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173996 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6771,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179304 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6787734 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c756ad1a683e9f2efcbb3fddfb8f9b906b695c8d",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:25+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c756ad1a683e9f2efcbb3fddfb8f9b906b695c8d"
        },
        "date": 1590221166147,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6594,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 192,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6116889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13760398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10824260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 87.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13610191 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3192066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11061216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7133569 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6735625 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6590764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 608,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2003412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2402,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "548586 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 239,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4970832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7370757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16733985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38619174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 173,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7006621 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 533,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2213222 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 686,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1752673 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 283,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4395303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 286,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4125919 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20597263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7456862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4646276 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1394,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "763916 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "873414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 324,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3637936 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1271,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "972121 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16604815 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1347,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "861614 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1325,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "836100 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1103445,
            "unit": "ns/op\t     196 B/op\t       2 allocs/op",
            "extra": "1020 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6540,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182323 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6805,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170246 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 202,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6304389 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "dca25b9acb7f441c2ef776b3efcd503f9bfe4fa6",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:34+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/dca25b9acb7f441c2ef776b3efcd503f9bfe4fa6"
        },
        "date": 1590221168681,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5466,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "200353 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7582100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15226286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11941981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 71.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15881466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4140196 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 101,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13982180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9005012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8170423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8270665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 504,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2461436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2003,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "702424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 198,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6058598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8076579 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 56.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20134260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44529176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 138,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9143799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 443,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2591816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 568,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2136828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 255,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5159176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 225,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4745187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24922525 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9272284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 258,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "5805948 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1163,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000431 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 268,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4430234 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1027,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 53.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21126986 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1117782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1106,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 907109,
            "unit": "ns/op\t     150 B/op\t       2 allocs/op",
            "extra": "1334 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5467,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "209133 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5324,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "217870 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6957451 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "7ae76de074d8616369bf390ca63a8aa4d4aaa002",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:39+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/7ae76de074d8616369bf390ca63a8aa4d4aaa002"
        },
        "date": 1590221184802,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170893 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6817038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15494589 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11824790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15046272 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3415024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 110,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11769265 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7522387 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7497993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7564983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 565,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2181003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2087,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "586856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5501140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8408938 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19372512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39796776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7701271 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 507,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2354757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 690,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1749742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4547433 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 268,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4452776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 48.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25071849 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8092066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 309,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4625116 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1348,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "873399 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1294,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "874696 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 294,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4151847 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1211,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "974406 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16901713 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908643 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "900694 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1101918,
            "unit": "ns/op\t     190 B/op\t       2 allocs/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6588,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179948 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6659,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177840 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 185,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6558902 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5ebb13d98c5485c0bdc9fc70b490dbeb09f93257",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:45+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/5ebb13d98c5485c0bdc9fc70b490dbeb09f93257"
        },
        "date": 1590221186635,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6599,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6300045 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 85.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14124558 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 111,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10695285 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14471541 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 370,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3100953 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 113,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10894684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7355325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6710812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7073095 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 566,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2106282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2170,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "639321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 226,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5172242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7490973 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15214497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38092396 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 171,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7232805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 530,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2285128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 681,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1727148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 270,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4551552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 288,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4145827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19911072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7640660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 289,
            "unit": "ns/op\t     239 B/op\t       4 allocs/op",
            "extra": "4703804 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1359,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "795535 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "889792 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 331,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3685837 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "920563 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17452468 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1273,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "919010 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1271,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "891787 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1092261,
            "unit": "ns/op\t     184 B/op\t       2 allocs/op",
            "extra": "1090 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6372,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185662 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6302,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173372 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 197,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6122710 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "7b5180e8b2557ae3e88e853abea22a5633bd4bb6",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:54+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/7b5180e8b2557ae3e88e853abea22a5633bd4bb6"
        },
        "date": 1590221194710,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5980,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181789 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6355780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14838772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11533654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14738552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 340,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3573669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11653846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7388038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7085872 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7610882 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 555,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2153790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2010,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "672686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5494740 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7153735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17829296 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39065472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7494667 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 500,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2422608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 644,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1824772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 252,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4633720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 264,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4425530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21305120 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7797597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 287,
            "unit": "ns/op\t     244 B/op\t       4 allocs/op",
            "extra": "4595220 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1289,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "841302 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "919922 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 320,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3895849 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18851499 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "902569 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1222,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "922978 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1025635,
            "unit": "ns/op\t     170 B/op\t       2 allocs/op",
            "extra": "1176 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5741,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193251 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5929,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201074 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6631088 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "3f316b21e53b92d72d5eb32a3f977754ba146157",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:04+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/3f316b21e53b92d72d5eb32a3f977754ba146157"
        },
        "date": 1590221198644,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5814,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197121 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8107976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 66.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18491883 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14052360 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 68.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18192164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 303,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3876772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 89,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13098943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8793972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8660469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9313813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 480,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2550097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1881,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "804637 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 187,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6356600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9394983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 53.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23393176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42451184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 131,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9206106 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 447,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2653251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 583,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1838612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 220,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5191544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 233,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4881944 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29558216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10260262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 271,
            "unit": "ns/op\t     257 B/op\t       4 allocs/op",
            "extra": "5346679 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1215,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "884662 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 245,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5050186 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18937914 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "988498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "988124 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 968462,
            "unit": "ns/op\t     155 B/op\t       2 allocs/op",
            "extra": "1293 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5805,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187167 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5753,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201064 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 164,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7750779 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "0bc84eb91cd8d1dca85f2b2a0403f4686a1c77a4",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:16+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/0bc84eb91cd8d1dca85f2b2a0403f4686a1c77a4"
        },
        "date": 1590221214701,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6588,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7542622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14959532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13859097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 75.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15973107 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3658844 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 96.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12668262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7943338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8131251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7688781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 522,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2200461 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1978,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "694582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 200,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6027873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8887676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 60.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19841587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 28.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40547031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 143,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8411968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 448,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2456678 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 594,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2006151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 244,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5076552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 258,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4416183 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27050380 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8866191 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 299,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4656859 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1355,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "768421 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1233,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "970714 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 276,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4270426 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "965870 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16939849 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910959 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "928224 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1083993,
            "unit": "ns/op\t     186 B/op\t       2 allocs/op",
            "extra": "1077 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6600,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "194910 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7739,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174814 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6260184 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1614feaddb8371327e2d935234ec642aa7a39d7e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:21+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/1614feaddb8371327e2d935234ec642aa7a39d7e"
        },
        "date": 1590221221135,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6305,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6604652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14497041 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11257684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15098032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3473900 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 104,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11546920 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7726622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6797560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7208397 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 544,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2221166 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2200,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "644654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 212,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5537901 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7516918 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18684066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41040518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7932055 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 499,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2445626 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 624,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1811053 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4699300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 259,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4629518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20833449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8056930 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 280,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4987354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1272,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "819523 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 300,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3886852 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "885760 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17315575 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961785 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952683 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1005037,
            "unit": "ns/op\t     170 B/op\t       2 allocs/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6124,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198310 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6130,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187622 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 193,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6625688 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "b8da80d9997e79ca54a3343c7a0775b806cabb4e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:27+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/b8da80d9997e79ca54a3343c7a0775b806cabb4e"
        },
        "date": 1590221224666,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173636 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7020873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15640980 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11721778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15148908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3514214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12191536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7557319 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6239822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7676710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 549,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2186485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2037,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "678720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 211,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5565464 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8206634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19354044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40332814 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8108620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 503,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2390684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 664,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1780978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 255,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4597508 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 272,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4507888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23749137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8292949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 311,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "4619768 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1351,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "773642 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1290,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910048 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 293,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4159410 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "947905 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16985143 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "899739 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "905299 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1084393,
            "unit": "ns/op\t     189 B/op\t       2 allocs/op",
            "extra": "1062 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6569,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157838 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6535,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185556 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6958580 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "13ac6767e77890f7b2ff4261130b0ce17baafac9",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:28+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/13ac6767e77890f7b2ff4261130b0ce17baafac9"
        },
        "date": 1590221279831,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5346,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "199759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8440382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15571372 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 89.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14661435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 67.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17228514 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 300,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4142433 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 89.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13881226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9422665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8721279 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8393490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 441,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2680881 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1745,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "822493 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 176,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6148628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10186722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 50.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23762908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 24.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47002138 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 126,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9450985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 454,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2836611 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 558,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2169536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 216,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5628428 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 225,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5299268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 38.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30874964 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 116,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10517493 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 268,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "5259207 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1141,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "883722 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 243,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5038231 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 55.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20624485 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1093,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1080,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 874359,
            "unit": "ns/op\t     145 B/op\t       2 allocs/op",
            "extra": "1380 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5180,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201530 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5334,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "225386 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 153,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7980153 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "49c703744cbe51b2b570c17c7187b97d9b2f4256",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:45+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/49c703744cbe51b2b570c17c7187b97d9b2f4256"
        },
        "date": 1590221298376,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5781,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "200782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8381664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 64.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19255677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 84.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14901362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 64.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18234577 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4079516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 90.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14040873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8691478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8176148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8045392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 433,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2731282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1802,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "777804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 173,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6740394 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9465663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 50.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23977144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50276888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 126,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9496641 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 438,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2791050 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 557,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2114523 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 222,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5873404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 233,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5422842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27734235 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 120,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9565390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 258,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "5264686 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1152,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1040763 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 242,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4911174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1048,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1190648 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 55.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20052880 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1098,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 919088,
            "unit": "ns/op\t     151 B/op\t       2 allocs/op",
            "extra": "1324 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5470,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "213169 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5307,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "217923 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 162,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "8314392 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "8fad71a750dfab784ae5445831718a98bac73766",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:38+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/8fad71a750dfab784ae5445831718a98bac73766"
        },
        "date": 1590221298449,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6666517 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14503516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10290328 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13903344 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3537801 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12103965 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7082234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6569379 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7316676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2013270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2101,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "534817 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 217,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5293977 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7320661 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19082708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41728336 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7741935 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 486,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2473950 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 634,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1868376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4451208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 264,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4569470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21129361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7590355 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 275,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4989595 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1318,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "783259 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "976674 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 302,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3996340 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18881275 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1225,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907812 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "984810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1008821,
            "unit": "ns/op\t     168 B/op\t       2 allocs/op",
            "extra": "1192 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6552,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "208447 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6457,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "191310 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 206,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6411987 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "59fcad317adde10a5e1dc24b5b087686ca14a685",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:59+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/59fcad317adde10a5e1dc24b5b087686ca14a685"
        },
        "date": 1590221334500,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6652,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168771 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7183717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15432301 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11633557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15250738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3529362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 102,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11926194 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7228856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7430929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7518691 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 534,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2275959 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2022,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "703436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 210,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5817198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8401354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18903224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40324490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 148,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8285451 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 508,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2304810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 672,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1751583 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 253,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4799811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 265,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4522183 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25318732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8353246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 312,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4654518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1362,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "775051 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1281,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "939800 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 287,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4127229 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "983860 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16901986 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1291,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "916354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910238 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1083600,
            "unit": "ns/op\t     184 B/op\t       2 allocs/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6460,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181774 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6568,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173479 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 185,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6530664 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c27fd7ae7438bbed5d69e71667edba99dc317115",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:32+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c27fd7ae7438bbed5d69e71667edba99dc317115"
        },
        "date": 1590221349201,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6572,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181195 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7122925 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16139485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 98.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12357987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14192767 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3670321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12305936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7841940 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7556610 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7840566 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 522,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2283891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2025,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "658312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 205,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5719339 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8719542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20510274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39699892 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 149,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8236921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 498,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2387150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 656,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1824650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 249,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4683882 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 263,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4426251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24686408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8406474 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 304,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "4344187 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1361,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "791064 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1309,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "938366 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 279,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4301518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "943383 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17102338 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1261,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "990487 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "942346 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1052083,
            "unit": "ns/op\t     174 B/op\t       2 allocs/op",
            "extra": "1150 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6358,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "188592 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6428,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181143 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 183,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7056067 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "02b373e43049cb98c8a1bf71b81803ffba4f6d20",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:11+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/02b373e43049cb98c8a1bf71b81803ffba4f6d20"
        },
        "date": 1590221392299,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6691,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 197,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6270418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14103565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10575601 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 85.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14323899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3294889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 108,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11137264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7014541 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6349430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6949238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 594,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2032914 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2304,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "607192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 223,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5378834 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7239896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16108239 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38992708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 166,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7309459 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 533,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2309710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 684,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1740064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 279,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4233991 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 299,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4121949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20370915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7278751 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 303,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "4675646 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1438,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "708061 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "822268 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 329,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3606740 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1263,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886509 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587945 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1377,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "876607 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "818317 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1080637,
            "unit": "ns/op\t     186 B/op\t       2 allocs/op",
            "extra": "1078 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6357,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180552 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6678,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167052 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 198,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5961386 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5b5612c98c699e192e7ffea7a89aac21dd60549f",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:07+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/5b5612c98c699e192e7ffea7a89aac21dd60549f"
        },
        "date": 1590221391967,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6184,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7791261 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 68.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16824632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13008424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 76.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17883044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3431008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 107,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11566192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7236232 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6673190 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6930974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2191485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2071,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "683677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 212,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5364445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8286660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19439731 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36786456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7706709 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 520,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2337628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 686,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1723792 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 265,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4623878 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 261,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4357500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25519604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8721664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 300,
            "unit": "ns/op\t     235 B/op\t       4 allocs/op",
            "extra": "4825238 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1281,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "921925 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 270,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4541511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16667490 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1211,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "889975 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1021506,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1107 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5957,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "194628 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6205,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "196498 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6663357 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "583f326be15b793b7bf730d2d6a6edfb75c3948a",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:17+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/583f326be15b793b7bf730d2d6a6edfb75c3948a"
        },
        "date": 1590221397171,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6903,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "178006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6944271 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15445988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12267552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15034966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3587382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 102,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12037467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7868617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6979644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7673557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 535,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2265009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2060,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "674739 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 214,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5837349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8551243 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19711491 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38652051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 148,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8222647 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 502,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2300719 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 663,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1781559 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 252,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4716748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 270,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4472545 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25188622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8321095 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4659816 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1387,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "767174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1307,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924538 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 289,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4095585 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "979113 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16483470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1299,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924949 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886204 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1086803,
            "unit": "ns/op\t     183 B/op\t       2 allocs/op",
            "extra": "1092 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6481,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177552 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6555,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172515 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6645658 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c422f90fbac4aa7710185273574280f3b4e70d7e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:29+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c422f90fbac4aa7710185273574280f3b4e70d7e"
        },
        "date": 1590221400776,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6590,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7159993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14821255 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12280862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15261510 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3527110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11757007 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7455012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7745937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7519009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 564,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2238608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1968,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "708708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 211,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5792427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8451813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18845989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42519114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 149,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7732090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 503,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2315852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 659,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1780369 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4719753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 261,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4528716 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26304846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8628630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4630782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1343,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "778945 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "913640 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 283,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4138616 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16524799 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932556 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1272,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "940460 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1047807,
            "unit": "ns/op\t     178 B/op\t       2 allocs/op",
            "extra": "1128 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6274,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184694 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6340,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176775 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6858109 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1e9cae81f82d36f2b547ae467834665ff8b3c91e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:36+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/1e9cae81f82d36f2b547ae467834665ff8b3c91e"
        },
        "date": 1590221418856,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6951,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6942063 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15286974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11304494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13651016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3268712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 107,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11366322 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7308483 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7083523 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7155141 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 572,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2169390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2075,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "669802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 218,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5660692 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7818897 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18988707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37555506 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8128321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 511,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2311398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 696,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1680277 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 261,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4488423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 276,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4402676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23766582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8189782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 320,
            "unit": "ns/op\t     249 B/op\t       4 allocs/op",
            "extra": "4460414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1402,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "758926 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1319,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "912128 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 297,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4099146 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1234,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "983841 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16132360 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "880957 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1321,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "840502 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1111316,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1080 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6793,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180804 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6686,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173911 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6813622 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "e66afea4c07bc3c98c34ad80aa096e29ad59d5e7",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:41+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/e66afea4c07bc3c98c34ad80aa096e29ad59d5e7"
        },
        "date": 1590221466703,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6643,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6224947 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 81.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14535877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11331289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13531500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 365,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3398859 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11776364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6966891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6857890 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7017078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 571,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2071520 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2296,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "572241 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 231,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5156979 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7624730 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35982333 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 171,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7428663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 518,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2329119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 669,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1746750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 277,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4527778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 286,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4283581 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20513244 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7547887 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 298,
            "unit": "ns/op\t     239 B/op\t       4 allocs/op",
            "extra": "4725936 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1380,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "725940 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1274,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961918 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 326,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3507949 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1242,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "959626 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15641511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "864405 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1117316,
            "unit": "ns/op\t     202 B/op\t       2 allocs/op",
            "extra": "991 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6647,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173671 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6563,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166560 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 199,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6023516 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "071fec42feee82e04e0ab5bf5970e84808fdb50f",
          "message": "Merge pull request #399 from Fenny/master\n\n☄️ v1.10.0",
          "timestamp": "2020-05-23T09:58:31+02:00",
          "tree_id": "12a2768cf756eae8210ba53b0cb43d601589b2f7",
          "url": "https://github.com/gofiber/fiber/commit/071fec42feee82e04e0ab5bf5970e84808fdb50f"
        },
        "date": 1590221846056,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6840,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6164066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 85.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14010475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10567923 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13683459 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 368,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3196201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11044017 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7281742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6614444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7104496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 554,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2161341 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2121,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "634596 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 207,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5712840 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7847458 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18143486 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37241127 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 163,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7256071 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 526,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2225781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 682,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1749711 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 277,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4441910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 281,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4289902 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19673821 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7330866 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 295,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "4551703 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1388,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "780181 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "893109 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 332,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3643240 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1242,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "943824 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17080225 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897446 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1310,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859245 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1111090,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1083 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6579,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177858 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6678,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168696 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 200,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6227306 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25568509ce8a4353267c7be624d88c1d2ccedf09",
          "message": "Merge pull request #402 from Fenny/master\n\nReduce pre allocated memory, fix Etag benchmark, cleanup unused stuff",
          "timestamp": "2020-05-23T15:05:59+02:00",
          "tree_id": "8100e45065c9123e61f4a7626f5f6b55a55cb39f",
          "url": "https://github.com/gofiber/fiber/commit/25568509ce8a4353267c7be624d88c1d2ccedf09"
        },
        "date": 1590239244173,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7029,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171033 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6958,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6974134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15252714 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11842718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15171691 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3469423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10998738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7503802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7346085 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7411100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2091404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2186,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "561220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5433220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8171557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19263528 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38371462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 163,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7552465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 541,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2200629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 725,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1675021 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 274,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4453101 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 297,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4075852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24346780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8357721 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 341,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "3535909 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1322,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "892791 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1230,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932779 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 291,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4075387 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "979968 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18055885 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1210,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "966361 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1252,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897747 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1064329,
            "unit": "ns/op\t     180 B/op\t       2 allocs/op",
            "extra": "1114 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7051,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168742 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162848 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 196,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6238957 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdea1c806aa146c8aa45b5785eaf2e17c40a9f2c",
          "message": "Merge pull request #406 from Fenny/master\n\nHot fix delimiter miss match, parser needs fix",
          "timestamp": "2020-05-23T18:42:29-04:00",
          "tree_id": "4bc232c2eb72ef87c9a86d3987dcd3fcf0599a3c",
          "url": "https://github.com/gofiber/fiber/commit/cdea1c806aa146c8aa45b5785eaf2e17c40a9f2c"
        },
        "date": 1590273833149,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6029,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "210688 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6178,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201342 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8216066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18467043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 87.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13042873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 67.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17361658 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3996176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 88.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13576927 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8907838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9128516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7972208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 481,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2533334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1797,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "722389 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 195,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5932870 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8614941 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23890554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41369850 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 135,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9371680 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 453,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2732350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 606,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1996568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 231,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5116122 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 252,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4771114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 40.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28198203 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10220020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 274,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "4390412 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1132,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "892770 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1039,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 240,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5177130 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 962,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1273982 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21657040 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 994,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1243413 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 878439,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "1392 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5808,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198697 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5858,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195193 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 157,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7702484 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3ab0e90802d448f60a795068c5fa5540b5b9dcd",
          "message": "Merge pull request #407 from ReneWerner87/panic_on_optional_param\n\n🐞 Panic on \":param\" #405",
          "timestamp": "2020-05-24T05:47:42-04:00",
          "tree_id": "893daf6fb9cf8d0bdb5010c3f1516ec389870c14",
          "url": "https://github.com/gofiber/fiber/commit/b3ab0e90802d448f60a795068c5fa5540b5b9dcd"
        },
        "date": 1590313745859,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5567,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180397 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5580,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "223207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8357325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 61.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21351387 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 78.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15397273 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 62.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17636956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4102557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 94.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12028449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9079516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9007264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10284445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 459,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2745081 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1693,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "738260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 176,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6701473 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10221072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 52.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23975140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52688847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 131,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8736580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 471,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2874726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 604,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1874149 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 227,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5219218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 249,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5050867 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28825471 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10620037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 290,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4005363 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1119,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 301,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4004100 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1044,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19341325 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1033,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1139348 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1088,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 980581,
            "unit": "ns/op\t     150 B/op\t       2 allocs/op",
            "extra": "1334 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6254,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173269 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6688,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179209 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 153,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7017324 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1896b7d615fa743ab910459c9bbd2cbbc9eae0e",
          "message": "Merge pull request #408 from ReneWerner87/panic_on_optional_param\n\nFix error on static \":param\" #405",
          "timestamp": "2020-05-24T08:11:32-04:00",
          "tree_id": "e3c7afcebeeb28d1e5d706635785bd528f9d856b",
          "url": "https://github.com/gofiber/fiber/commit/a1896b7d615fa743ab910459c9bbd2cbbc9eae0e"
        },
        "date": 1590322377828,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6265,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180392 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6303,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6911764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17014519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12417642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13740966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 341,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3673677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11005206 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7852528 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7648480 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7478238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 563,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2314527 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2069,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "610164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5452770 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7901478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18422763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36820556 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7292584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 496,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2357323 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 652,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1932870 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4399407 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 269,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4348524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 51.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23275207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8650893 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 275,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "4412640 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1161,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "897636 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "997272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 311,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4006653 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1056,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 58.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20022974 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 975504,
            "unit": "ns/op\t     165 B/op\t       2 allocs/op",
            "extra": "1215 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6359,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195152 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6016,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201496 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6643285 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a29062ae6ad300147d9b8063275c644184e1b2",
          "message": "Merge pull request #409 from ReneWerner87/panic_on_optional_param\n\nPanic on static \":param\" path #405",
          "timestamp": "2020-05-24T08:54:58-04:00",
          "tree_id": "bace46735dfdd979ff804c2bbff6f47fed37efa7",
          "url": "https://github.com/gofiber/fiber/commit/73a29062ae6ad300147d9b8063275c644184e1b2"
        },
        "date": 1590324983646,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6600,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "190420 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6686,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7737507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 70.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14772694 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13744993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16273603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3896310 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 100,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12370681 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8145465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7323606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7337913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 546,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2177193 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2021,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "556399 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5403003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9010512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 60.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20577067 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 27.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39204764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 145,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8343739 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 517,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2412728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 684,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1734204 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4506010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 281,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4333591 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26018214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9109659 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 322,
            "unit": "ns/op\t     250 B/op\t       4 allocs/op",
            "extra": "3545678 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1254,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "917125 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 292,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4125889 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1087,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1120527 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19958665 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63605341 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289982919 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1222,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978602 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "955788 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1051239,
            "unit": "ns/op\t     176 B/op\t       2 allocs/op",
            "extra": "1140 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6634,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157136 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6790,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184809 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6574399 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8b8fdfb35c4dd68bd764e7e9362d704145a56db",
          "message": "Add Handler type (#410)\n\n* Add new supporter\r\n* Add new test condition\r\n* Add Handler Type",
          "timestamp": "2020-05-24T16:02:21+02:00",
          "tree_id": "ecc0ca80589cb60d7279cb2b8b036198b9f4dc3d",
          "url": "https://github.com/gofiber/fiber/commit/e8b8fdfb35c4dd68bd764e7e9362d704145a56db"
        },
        "date": 1590329037352,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6046,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "205047 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6332,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "206756 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7497595 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 69.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16179696 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13716735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 71.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15884607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3867324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11904986 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9010078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7576983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8838789 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 487,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2382585 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1785,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "595888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 194,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6242706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8677268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 55.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22266532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48925347 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 142,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8985025 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 465,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2576008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 647,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1909778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 242,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5056560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 253,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4889035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25736155 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9682174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 277,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4634991 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1143,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1084,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 258,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4509454 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1021,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20429971 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58644014 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305822737 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1042,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "976083 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 938121,
            "unit": "ns/op\t     157 B/op\t       2 allocs/op",
            "extra": "1276 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6032,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177879 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6333,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187387 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 170,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7270345 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02b4061b447a5eb1c4a4d1299e2d0e9523528e84",
          "message": "Add Handler & Templates interface (#412)\n\n* Add new supporter\r\n* Add new test condition\r\n* Add Handler Type\r\n* Update Templates Interface",
          "timestamp": "2020-05-25T13:31:20+02:00",
          "tree_id": "8532e5bf8554df5c88c3355a650ca8e6eb11fb87",
          "url": "https://github.com/gofiber/fiber/commit/02b4061b447a5eb1c4a4d1299e2d0e9523528e84"
        },
        "date": 1590406377453,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7215,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174621 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7121,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5903671 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 89.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13870660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10464064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12677215 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 386,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3073507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 119,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10143578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6758824 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6501931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6886214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 650,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "1862478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2256,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "554638 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 251,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4775796 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6601830 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 75.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15354175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37332776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 194,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6494467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 560,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2096877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 734,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1653246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 297,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4074936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 309,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4080937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19828474 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7286391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 315,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "3636984 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1333,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "864831 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1340,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "830545 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 335,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3653810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "911524 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18105225 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55086541 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275237451 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1375,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "842682 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1353,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "852741 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1156858,
            "unit": "ns/op\t     199 B/op\t       2 allocs/op",
            "extra": "1006 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7088,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169495 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7165,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169705 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 211,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5629922 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c027e715258f278a746e6cb40e2315bd2ee377",
          "message": "Small changes (#415)\n\n* Update template examples\r\n\r\n* Update fasthttp to v1.13.1\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\n\r\n* Cookie SameSite defaults to Lax\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-Authored-By: Queru <pascal@queru.net>\r\n\r\n* Fix router bug\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\n* Remove unused code\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\nCo-authored-by: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-authored-by: Queru <pascal@queru.net>\r\nCo-authored-by: RW <renewerner87@googlemail.com>",
          "timestamp": "2020-05-27T10:22:01+02:00",
          "tree_id": "b81d876e4a019ebbac6b80afa50df1533e19e525",
          "url": "https://github.com/gofiber/fiber/commit/f2c027e715258f278a746e6cb40e2315bd2ee377"
        },
        "date": 1590567825897,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7430,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "147462 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7502,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "151586 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5871662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 89.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13119732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9985495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 97.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12237968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 373,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3248650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 122,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9872228 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6284635 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6330150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6752020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 571,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2099086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2192,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "489775 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 249,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4917182 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6766088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 73.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16353150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 34.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35230467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 187,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6083907 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 584,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2062518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 748,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1629578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 313,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3936873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 316,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3715630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 61.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17479040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7242024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 328,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "3524502 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1392,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "835782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "826314 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 358,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3406532 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1253,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890544 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17189142 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55086918 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "246169815 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1322,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1327,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "828614 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1194106,
            "unit": "ns/op\t     195 B/op\t       2 allocs/op",
            "extra": "1026 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7301,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168524 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7214,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "149324 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 213,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5802204 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c027e715258f278a746e6cb40e2315bd2ee377",
          "message": "Small changes (#415)\n\n* Update template examples\r\n\r\n* Update fasthttp to v1.13.1\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\n\r\n* Cookie SameSite defaults to Lax\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-Authored-By: Queru <pascal@queru.net>\r\n\r\n* Fix router bug\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\n* Remove unused code\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\nCo-authored-by: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-authored-by: Queru <pascal@queru.net>\r\nCo-authored-by: RW <renewerner87@googlemail.com>",
          "timestamp": "2020-05-27T10:22:01+02:00",
          "tree_id": "b81d876e4a019ebbac6b80afa50df1533e19e525",
          "url": "https://github.com/gofiber/fiber/commit/f2c027e715258f278a746e6cb40e2315bd2ee377"
        },
        "date": 1590567992541,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6551,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171439 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6743,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6237942 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 81.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15072429 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11079007 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14211128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 358,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3467212 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10465390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6749799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6631082 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7054178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 539,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2067904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2128,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "548712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 240,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5247926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6763435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17185803 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37941918 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 181,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6664236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 554,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2123618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 733,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1673954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 290,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4166726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 298,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3966909 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19560769 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7411687 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 292,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "3643684 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1262,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "933174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1235,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "903020 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 332,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3645964 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961845 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17476702 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55946844 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "245188364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932187 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "944498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1073336,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1117 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6969,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173722 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6648,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179616 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 194,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6324334 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd55804b7dcf33c078cd1e435090d72533e1e15",
          "message": "Merge pull request #418 from Fenny/master\n\nFix partial wildcard in Static",
          "timestamp": "2020-05-27T17:04:33-04:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/1cd55804b7dcf33c078cd1e435090d72533e1e15"
        },
        "date": 1590613562963,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6898,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164840 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6863,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7229065 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 75.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15760374 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11526022 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15570862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 336,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3567600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11898326 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7142361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7689441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7560954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 547,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2247393 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2156,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "468049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 219,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5443192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8223805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17759584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39231627 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7470003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 519,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2293101 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1739497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4452880 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 285,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4196986 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25830506 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8530190 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 316,
            "unit": "ns/op\t     247 B/op\t       4 allocs/op",
            "extra": "3606442 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1280,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "925573 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "937869 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 168,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "7146162 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19252178 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59829741 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270726764 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "980700 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1046316,
            "unit": "ns/op\t     189 B/op\t       2 allocs/op",
            "extra": "1062 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6928,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161739 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7041,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176566 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 186,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6475915 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd55804b7dcf33c078cd1e435090d72533e1e15",
          "message": "Merge pull request #418 from Fenny/master\n\nFix partial wildcard in Static",
          "timestamp": "2020-05-27T17:04:33-04:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/1cd55804b7dcf33c078cd1e435090d72533e1e15"
        },
        "date": 1590613624704,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7057,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157486 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7107,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174876 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5929700 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14749753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10473444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 88.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13558128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3189030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 123,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10062302 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6636969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7011324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7093707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 544,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2149989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2163,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "508930 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 236,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5055860 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6972954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16837473 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36557281 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 172,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7227313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 564,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2204835 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 702,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1697564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 282,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4518336 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 295,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3971607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19438110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7768700 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 285,
            "unit": "ns/op\t     233 B/op\t       4 allocs/op",
            "extra": "3898320 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1294,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "873050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "906494 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 198,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5995203 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16936402 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61409661 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275492930 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1252,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978369 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "930456 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1078554,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1098 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6698,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156829 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6801,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167877 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 200,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6232092 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edb10010da90edcf7d35b5988cd40e33d52d35d8",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:05:47+02:00",
          "tree_id": "276d09c082785d34067469f22c28eb652c7cd7e8",
          "url": "https://github.com/gofiber/fiber/commit/edb10010da90edcf7d35b5988cd40e33d52d35d8"
        },
        "date": 1590613652016,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7159,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "155275 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6940,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7021231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16208154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11946069 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14895499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 332,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3458418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11143773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7431333 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7574985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7691296 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 554,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2100883 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2107,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "558622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 219,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5559913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8436666 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18662757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39971463 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8030001 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 541,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2225377 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 738,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1610343 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 285,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4473032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 295,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4212079 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 48.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25839020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8290126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 338,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "3471375 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1289,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "910796 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "991123 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 181,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6951074 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18594142 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60753633 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "262877634 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "953268 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "992985 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1078393,
            "unit": "ns/op\t     178 B/op\t       2 allocs/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7207,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168776 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167694 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 189,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6219537 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edb10010da90edcf7d35b5988cd40e33d52d35d8",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:05:47+02:00",
          "tree_id": "276d09c082785d34067469f22c28eb652c7cd7e8",
          "url": "https://github.com/gofiber/fiber/commit/edb10010da90edcf7d35b5988cd40e33d52d35d8"
        },
        "date": 1590613665189,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7078,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163388 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7210,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182952 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5531990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 88.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13075063 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 116,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10359805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 87.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12703825 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 391,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2971606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 122,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9612846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6911642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 195,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5842502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6177829 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 600,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2002868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2140,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "523383 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 247,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4855467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7321863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 75.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17165931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36756987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 182,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6296329 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 574,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2147415 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 780,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1578805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 292,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3735231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 302,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3881599 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 64.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18780822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7515486 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 329,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "3651298 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1449,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "762741 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1374,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 197,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5542719 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1232,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 72.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16887823 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 23.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48599545 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "257326538 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1382,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "811347 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "845721 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1108756,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1099 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7270,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163262 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7158,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173646 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 211,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5543809 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38c8bb240daedba0887f864ed1f18facd7403df3",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:06:23+02:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/38c8bb240daedba0887f864ed1f18facd7403df3"
        },
        "date": 1590613767041,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7573,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157329 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7733,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6057992 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 89.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12974450 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9910658 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 95.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12860982 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 387,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3019507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 120,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9878073 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 188,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5947221 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6247477 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6602444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 606,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2006497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2476,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "476004 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 253,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4659009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6911858 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 73.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16220725 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36553304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 197,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6416377 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 597,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1991500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 872,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1582984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 314,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3675206 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 327,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3737340 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19660274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6684519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 327,
            "unit": "ns/op\t     250 B/op\t       4 allocs/op",
            "extra": "3557026 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1422,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "827697 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1349,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "849398 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 210,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5909541 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "945417 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16313377 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53738528 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "258398462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1342,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "892749 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "784861 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1187915,
            "unit": "ns/op\t     193 B/op\t       2 allocs/op",
            "extra": "1038 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7628,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157702 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7731,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159740 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 218,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5562184 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38c8bb240daedba0887f864ed1f18facd7403df3",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:06:23+02:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/38c8bb240daedba0887f864ed1f18facd7403df3"
        },
        "date": 1590613792308,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 8058,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166346 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6730,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6385917 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 82.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14184588 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10056729 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 89.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14042857 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 355,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3150970 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 112,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10756276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7052778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6985437 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7346376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 558,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2170150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2229,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "571545 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 229,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5119318 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7323883 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17219200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38155507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 172,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6799827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 532,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2252674 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 687,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1691482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 278,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4075968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 285,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4161003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19753354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7039758 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     264 B/op\t       4 allocs/op",
            "extra": "4119427 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1349,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "794482 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1268,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "893950 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 192,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6272432 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16969813 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57061226 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284068776 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1233,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "871050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1269,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "816289 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1077114,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1105 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6822,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176244 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6812,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174901 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 196,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6142238 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "2f4b9c4132883d7187795cf173453220277b4335",
          "message": "Add Handler comment",
          "timestamp": "2020-06-01T11:19:29+02:00",
          "tree_id": "0f1356910e758b0a830cbdb546b51a63ec3bc20b",
          "url": "https://github.com/Fenny/fiber/commit/2f4b9c4132883d7187795cf173453220277b4335"
        },
        "date": 1591003273337,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6601,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179485 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6726,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159146 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7226889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17786112 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11891600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14922482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 317,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3868198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 104,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11700388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7605057 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7863424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8347078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 522,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2310684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2138,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "558200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 225,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5472499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8517536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 58.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18498946 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 28.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44035036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 151,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7801184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 508,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2407270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 700,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1794176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 260,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4597483 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 280,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4246681 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24833614 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8132863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 304,
            "unit": "ns/op\t     238 B/op\t       4 allocs/op",
            "extra": "3794698 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1238,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "940374 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "917277 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 162,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "7171438 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1076,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19511948 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62338390 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284730764 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "861230 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1047444,
            "unit": "ns/op\t     172 B/op\t       2 allocs/op",
            "extra": "1166 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6659,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184795 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6755,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182103 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6768010 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "06c119d49a53b7859dde8dd8302bae97becce880",
          "message": "Send 404 Body Response",
          "timestamp": "2020-06-01T11:24:22+02:00",
          "tree_id": "9ee3fd8ba65ca6c7ac836c613a3bb92502996b9e",
          "url": "https://github.com/Fenny/fiber/commit/06c119d49a53b7859dde8dd8302bae97becce880"
        },
        "date": 1591003564783,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5684,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "222796 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5551,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "220965 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8828998 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 62.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19295252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15416818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 62.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19225669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 258,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4401927 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 86.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14257562 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9894697 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9686216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10519822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 471,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2847168 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1711,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "768392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 176,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6323664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9344539 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 48.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23408504 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 23.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45725263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 125,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8696470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 420,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2953195 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 562,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2092526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 216,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5533951 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 226,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5088386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 40.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30432499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10110542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 247,
            "unit": "ns/op\t     233 B/op\t       4 allocs/op",
            "extra": "4889881 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1006,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 993,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1214583 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 142,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "8687481 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 949,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1372360 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 52.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21922689 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 15.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "79413882 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "360209384 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 976,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1306428 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 956,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1284499 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 829296,
            "unit": "ns/op\t     139 B/op\t       2 allocs/op",
            "extra": "1438 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5538,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "217812 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5428,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "228697 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 145,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7976227 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5c5afa88ae9ff997f6818baec307180afbc450b7",
          "message": "Add 404 Benchmark",
          "timestamp": "2020-06-01T11:54:23+02:00",
          "tree_id": "707982669e23962a89f38a855af698e68adf36a5",
          "url": "https://github.com/Fenny/fiber/commit/5c5afa88ae9ff997f6818baec307180afbc450b7"
        },
        "date": 1591005361273,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6118,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173846 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6263,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198481 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8142768 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 64.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18476826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 89.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12425948 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 68.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16840200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 297,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3989448 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12645108 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7829281 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9199915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8871836 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 465,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2627137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1785,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "656366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 194,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5833668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9770563 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 52.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20766180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42472046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 129,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9045794 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 447,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2818278 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 614,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1952847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 235,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5590231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 240,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5044810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 41.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31456083 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10192867 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 276,
            "unit": "ns/op\t     258 B/op\t       4 allocs/op",
            "extra": "4251133 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1318,
            "unit": "ns/op\t     112 B/op\t       4 allocs/op",
            "extra": "844114 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1101,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "975292 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1007,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 146,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "7981404 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 936,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1309988 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19860895 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 16.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "73954951 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "315388158 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1062,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1009,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1127480 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 932743,
            "unit": "ns/op\t     159 B/op\t       2 allocs/op",
            "extra": "1257 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6179,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176600 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6430,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193712 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 167,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7251644 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "a58bc02eca6e3485969adb0507f29da15c3952a0",
          "message": "Update benchmarks",
          "timestamp": "2020-06-01T12:05:02+02:00",
          "tree_id": "28fa049d4e9bf5c2c54fd792c94abb7a1930d7d0",
          "url": "https://github.com/Fenny/fiber/commit/a58bc02eca6e3485969adb0507f29da15c3952a0"
        },
        "date": 1591006003691,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7052,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170900 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6860,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6525981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13918843 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9955969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13643784 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 380,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3363386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 111,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10822027 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 188,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6560570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6635120 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7517422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 560,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2052231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2122,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "542199 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 236,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4625388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7439630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17132284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35222247 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 169,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7028598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 555,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2158496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 694,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1709599 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 283,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4142259 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 304,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4060670 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20996212 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7328314 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 324,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "3680758 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1311,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "872746 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1404,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "830300 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "912513 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 197,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6017805 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "960978 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 66.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16785997 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55298506 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "251862898 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1265,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "868321 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1085031,
            "unit": "ns/op\t     188 B/op\t       2 allocs/op",
            "extra": "1068 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6980,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179558 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7192,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165754 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 205,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5513095 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1827ccce7ab91c649ad5a44990715d49cedefdc0",
          "message": "Default 404 if Use response is empty",
          "timestamp": "2020-06-01T12:10:30+02:00",
          "tree_id": "106df2836e9cb7fbfe0990944f3f1ca853972a35",
          "url": "https://github.com/Fenny/fiber/commit/1827ccce7ab91c649ad5a44990715d49cedefdc0"
        },
        "date": 1591006323424,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7277,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159982 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7248,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6729175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15151395 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 109,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10620242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14596975 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 361,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3357224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10900358 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6952705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7066111 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7293801 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 580,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2100349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2176,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "531186 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 233,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4976408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7429806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18357853 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38236386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 162,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7308872 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 569,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2065875 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 744,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1601866 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 283,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4172476 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 308,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3870753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23356208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7907042 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 357,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "3365814 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1453,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "827510 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1350,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "852518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1258,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907321 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 177,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6834529 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "951277 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17368125 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57049948 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253777659 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "917625 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1281,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "906746 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1128632,
            "unit": "ns/op\t     190 B/op\t       2 allocs/op",
            "extra": "1057 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7270,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162099 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7361,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172657 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 195,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6120722 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "705b05216a6ac9c5fe4a77cd20bf0f85e6bef716",
          "message": "Update Static test",
          "timestamp": "2020-06-01T12:54:32+02:00",
          "tree_id": "f85f88c8dcce84282791669ded93f94fde312e16",
          "url": "https://github.com/Fenny/fiber/commit/705b05216a6ac9c5fe4a77cd20bf0f85e6bef716"
        },
        "date": 1591008966298,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7461,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164514 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7499,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162786 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 201,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6043226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 88.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12975591 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10538592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13617098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 384,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3180632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 121,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9838509 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5584154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6202357 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6358759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 593,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "1990551 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2343,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "524289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 253,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4785717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6780932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16272717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35434581 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 189,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6514698 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 585,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2023321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 759,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1582831 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 289,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3966033 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 312,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3853720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21028080 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6721218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 322,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "3623341 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1458,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "840163 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1367,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "869386 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 238,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4908858 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1263,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "895592 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 73.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16193598 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53238681 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 5.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "238151196 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1394,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "895806 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1364,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "835936 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1151351,
            "unit": "ns/op\t     191 B/op\t       2 allocs/op",
            "extra": "1047 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7453,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162114 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7474,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159015 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 215,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5751292 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "f9c08818ed6e297e026fe73fa22cd19e472884db",
          "message": "Return 404 if Next does not match",
          "timestamp": "2020-06-01T13:36:51+02:00",
          "tree_id": "5a69741c6aaba1097047df67ef95aaddc8ebfade",
          "url": "https://github.com/Fenny/fiber/commit/f9c08818ed6e297e026fe73fa22cd19e472884db"
        },
        "date": 1591011514080,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7169,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172431 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6966,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6889663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15043004 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11519148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14414587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 339,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3479856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 113,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11302831 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7090362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7068388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7438891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 549,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2206185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2038,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "559922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 215,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5494702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8108552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19595178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39802608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 157,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7714814 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 539,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2140584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 708,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1678215 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 264,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4492292 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 289,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4026750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23195185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7932115 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 346,
            "unit": "ns/op\t     256 B/op\t       4 allocs/op",
            "extra": "3435589 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1401,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "876450 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1262,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "865002 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "989919 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 243,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4990060 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1073674 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18188934 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59198180 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259140511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "942728 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1238,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1071861,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1098 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7072,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168711 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7156,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176421 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 186,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6313557 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "027823e08482e3516e20962246533419f01a9b09",
          "message": "Return 404 if Next does not match",
          "timestamp": "2020-06-01T13:45:04+02:00",
          "tree_id": "59282ee3be5d3b079b536fcf4c0e8baa37941170",
          "url": "https://github.com/Fenny/fiber/commit/027823e08482e3516e20962246533419f01a9b09"
        },
        "date": 1591011999991,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7214,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159745 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6953,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163864 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6963176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15827590 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11382205 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15177240 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3512068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11131153 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7397565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7628343 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7544527 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 549,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2154693 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2044,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "558603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 224,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5277970 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8051286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19540222 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38024868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7838943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 526,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2255464 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 713,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1682144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 273,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4395908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 287,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4152066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25765124 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8350741 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 343,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "3361581 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1422,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "870654 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1258,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "807042 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "958484 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 233,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5175604 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "958514 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18297232 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52539021 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "268394784 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890667 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1201,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "956942 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1065048,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1107 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6991,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169749 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7003,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174679 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6558835 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "69596c03b908d9419a93a06f2bc4c9fdb6d2b75f",
          "message": "Add io.Reader support\n\nCo-Authored-By: Roman Kredentser <shareed2k@gmail.com>",
          "timestamp": "2020-06-01T14:53:45+02:00",
          "tree_id": "e081b263fe836c24f188ba278abdd92352ef1bd3",
          "url": "https://github.com/Fenny/fiber/commit/69596c03b908d9419a93a06f2bc4c9fdb6d2b75f"
        },
        "date": 1591016122492,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7188,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153124 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7436,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164269 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6769804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15044850 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11101708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 85.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14122178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 349,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3408745 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 110,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10828808 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 185,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6688671 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7012963 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7296847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 579,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2117709 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2146,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "474758 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 242,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5017083 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7263612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17934540 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36468356 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 164,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6798846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 559,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2135180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 748,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1617123 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 285,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4213932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 300,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4038030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24134570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7865312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 359,
            "unit": "ns/op\t     255 B/op\t       4 allocs/op",
            "extra": "3458698 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1461,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "823435 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1347,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "809274 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1355,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "847518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 255,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4747930 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1224,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908886 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16823384 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55046840 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "250943546 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "875786 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1287,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "898413 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1143466,
            "unit": "ns/op\t     187 B/op\t       2 allocs/op",
            "extra": "1070 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7178,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169794 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7350,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167562 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 195,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6174937 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "8cfadbde291fc9eeedf9fa05ec2b8582d6167663",
          "message": "Add io.Reader comments\n\nCo-Authored-By: Roman Kredentser <shareed2k@gmail.com>",
          "timestamp": "2020-06-01T15:00:42+02:00",
          "tree_id": "73a75b278a530cb1cac3f2e4c224618edc4fe9e4",
          "url": "https://github.com/Fenny/fiber/commit/8cfadbde291fc9eeedf9fa05ec2b8582d6167663"
        },
        "date": 1591016543863,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6140,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176169 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6096,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7326355 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16254264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 95.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12368499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15865922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4009416 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13210404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7666862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7676828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7499522 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 495,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2486936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2008,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "555384 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 223,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5382172 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7180267 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17385454 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 28.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38388446 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 151,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7712910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 481,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2606773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 613,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1929850 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 264,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4493373 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 277,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4419196 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21561972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8379117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 267,
            "unit": "ns/op\t     258 B/op\t       4 allocs/op",
            "extra": "4255162 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1334,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "925861 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1145,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "882093 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 241,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4747563 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1077,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1229242 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 57.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20704599 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57507848 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305775064 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1038,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "988250 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 944648,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1106 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5940,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198501 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5941,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "206350 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6894344 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f08c08459d548cdcc37a339df56d97e3cc82524",
          "message": "Merge pull request #431 from Fenny/master\n\nRouter updates",
          "timestamp": "2020-06-01T09:08:19-04:00",
          "tree_id": "73a75b278a530cb1cac3f2e4c224618edc4fe9e4",
          "url": "https://github.com/Fenny/fiber/commit/4f08c08459d548cdcc37a339df56d97e3cc82524"
        },
        "date": 1591024203120,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6431,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180006 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6423,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186817 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7862060 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 65.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16594707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13192434 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16178438 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 294,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4081358 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 93.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12513151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8494502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8541549 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8639637 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 491,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2510832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1961,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "589852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 205,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5643544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8436332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 59.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19741597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41215252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7685055 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 522,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2336131 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 676,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1760773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 265,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4754724 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 280,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4381126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24188787 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8490472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 319,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "3706237 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1288,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "904044 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1129,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 213,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5018305 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1078,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1210650 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18881190 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58187079 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288481336 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "935047 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1053,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 919569,
            "unit": "ns/op\t     152 B/op\t       2 allocs/op",
            "extra": "1320 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5875,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "202965 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6315,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201620 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 167,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7591006 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "ae785453bb9cddb46ca9dc881f892c767f4d611e",
          "message": "Hide complete msg on DisableStartupMessage",
          "timestamp": "2020-06-01T20:29:52+02:00",
          "tree_id": "e6deeed421d6a405da34490233a4325a1bd624a3",
          "url": "https://github.com/Fenny/fiber/commit/ae785453bb9cddb46ca9dc881f892c767f4d611e"
        },
        "date": 1591036302227,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7412,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153794 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7515,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158373 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6803578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 84.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14598676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9848521 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 88.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13419838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 362,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3324366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 115,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9010143 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6470034 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6753392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6938557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 580,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2103302 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2282,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "512959 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 236,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5057461 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7469884 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 71.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17136992 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37723570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 175,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6679564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 568,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2098074 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 775,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1588932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 293,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3883239 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 310,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3975674 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24409627 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7856725 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 367,
            "unit": "ns/op\t     267 B/op\t       4 allocs/op",
            "extra": "3255040 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1479,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "806593 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1363,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "815278 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1315,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "881947 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 250,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4753069 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "938179 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16789802 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57206574 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "250385450 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1302,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "822444 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1348,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886647 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1191089,
            "unit": "ns/op\t     193 B/op\t       2 allocs/op",
            "extra": "1038 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7452,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160699 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7519,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "154042 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 201,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5995824 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "eb8c8d88d3be74d994ce22c02a0e57b0da67d972",
          "message": "Update version 1.10.3",
          "timestamp": "2020-06-01T20:30:11+02:00",
          "tree_id": "7d3e9efab24a23a7e973f8da483b922559094788",
          "url": "https://github.com/Fenny/fiber/commit/eb8c8d88d3be74d994ce22c02a0e57b0da67d972"
        },
        "date": 1591036308199,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7396,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164149 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7320,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159550 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6557048 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 80.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15118777 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11211012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 86.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13997068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 351,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3419971 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10490206 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6588426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6859966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7107250 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 570,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2068159 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2471,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "515894 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 234,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5015012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7568587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17431623 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37753452 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 167,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7131861 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 563,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2174485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 738,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1608487 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 291,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4193137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 313,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3947166 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20491275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7961772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 367,
            "unit": "ns/op\t     257 B/op\t       4 allocs/op",
            "extra": "3425470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1469,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "809700 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1348,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "853048 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1269,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "879618 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 256,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4573119 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "940602 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 69.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16769478 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56095447 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253253372 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1273,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "868773 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "898420 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1127230,
            "unit": "ns/op\t     190 B/op\t       2 allocs/op",
            "extra": "1057 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7295,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167349 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7461,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "144258 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 198,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6082370 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5caaea6d5a0e3f889624af699426a3401ed0ed81",
          "message": "Merge pull request #432 from Fenny/master\n\nUpdate DisableStartupMessage Behaviour",
          "timestamp": "2020-06-01T14:33:57-04:00",
          "tree_id": "7d3e9efab24a23a7e973f8da483b922559094788",
          "url": "https://github.com/Fenny/fiber/commit/5caaea6d5a0e3f889624af699426a3401ed0ed81"
        },
        "date": 1591103571698,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 8336,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "146014 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 8316,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "146262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6256371 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 87.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14177044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10410070 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13247932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3331965 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 115,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10334734 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6777430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6516985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7168274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 579,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2042256 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2505,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "459021 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 235,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4906140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7270956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16845855 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37303555 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 178,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6473082 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 566,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2069214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 760,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1562312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 301,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4008376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 312,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3845752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23492368 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7276124 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 350,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "3516708 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1534,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "768087 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1408,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "745855 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1327,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910891 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 260,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4623169 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907563 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 72.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17303128 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52559872 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "239454231 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1303,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "856071 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1353,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "850104 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1187866,
            "unit": "ns/op\t     197 B/op\t       2 allocs/op",
            "extra": "1017 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 8354,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "139038 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 8442,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "133896 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 205,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5428242 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f402a5495f9a917327d780e23b463b0285086fe",
          "message": "Merge pull request #434 from ReneWerner87/master\n\nFix a problem when matching the static routes",
          "timestamp": "2020-06-02T17:57:05-04:00",
          "tree_id": "923a3172ff7ef4146aa545cfb06441100950f24e",
          "url": "https://github.com/Fenny/fiber/commit/2f402a5495f9a917327d780e23b463b0285086fe"
        },
        "date": 1591135332502,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6536,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182707 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6523,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6253660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 86.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14877048 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10767772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14250026 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 365,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3318156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 110,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9875359 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7093683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6626067 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7308960 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 556,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2099832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2036,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "621480 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 225,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5287699 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7240966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17350045 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38818074 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 167,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7117834 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 534,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2240874 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 692,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1734564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 272,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4385392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 291,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4243192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20326080 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7303256 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 286,
            "unit": "ns/op\t     267 B/op\t       4 allocs/op",
            "extra": "4076244 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1416,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "850676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1292,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "888894 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "943594 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 270,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4417999 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19337390 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57096868 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "265262842 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908766 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1234,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "926475 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1072401,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1117 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6531,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175387 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6538,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6172324 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1d16f9943856bbb6f3b93e713103b6420fd63105",
          "message": "Update comment",
          "timestamp": "2020-06-03T00:02:26+02:00",
          "tree_id": "efa42a74dad6024558a4d21c885045860a4b57c9",
          "url": "https://github.com/Fenny/fiber/commit/1d16f9943856bbb6f3b93e713103b6420fd63105"
        },
        "date": 1591143260622,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7777,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "152288 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7597,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161318 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6944931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15839662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11867002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14999338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 366,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3454098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12772225 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6868976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7348150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7609335 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 538,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2225823 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2046,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "537114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 222,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5236561 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8647339 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19284585 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62927133 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 155,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7658584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 532,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2254765 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 707,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1678114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 278,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4207434 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 289,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4158984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24582829 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7718582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 343,
            "unit": "ns/op\t     253 B/op\t       4 allocs/op",
            "extra": "3489106 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1387,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "862308 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1287,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "858064 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1216,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "935427 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 239,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5024280 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1058241 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 66.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16839681 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59692190 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259368144 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1204,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "899034 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1226,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952746 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1068537,
            "unit": "ns/op\t     183 B/op\t       2 allocs/op",
            "extra": "1092 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7602,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "154840 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7659,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158304 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6407259 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "a257b6e1ec2f896fdc045a4bed2c218809e3c6c4",
          "message": "Add ErrorHandler",
          "timestamp": "2020-06-03T12:48:49+02:00",
          "tree_id": "98113567cd58369c93fa8a6eae71c7adf7cb3ede",
          "url": "https://github.com/Fenny/fiber/commit/a257b6e1ec2f896fdc045a4bed2c218809e3c6c4"
        },
        "date": 1591181426370,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7351,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "144902 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7282,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7808341 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16439089 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12066321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15478011 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 306,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3917857 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 90.6,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12762556 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7433628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7843348 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8150382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 509,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2215330 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1891,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "635470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 191,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5855272 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9858904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 57.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20292181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 16.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62511436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 139,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7509375 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 471,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2209110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 649,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1951683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 243,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4870324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 258,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4319252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25279902 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9172501 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 290,
            "unit": "ns/op\t     257 B/op\t       4 allocs/op",
            "extra": "4285278 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1266,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "865292 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1125,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1075,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 208,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5851189 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1030,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1232090 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18610846 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62338940 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284989921 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 978384,
            "unit": "ns/op\t     168 B/op\t       2 allocs/op",
            "extra": "1192 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7303,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176653 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7347,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "142861 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 174,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6510278 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "982bc5d55c83f8c80d69235e09a307f9a448c56c",
          "message": "Add ErrorHandler tests",
          "timestamp": "2020-06-03T12:57:31+02:00",
          "tree_id": "b6fbb46ea73267026b9fd74bc27aa138ed9f07ec",
          "url": "https://github.com/Fenny/fiber/commit/982bc5d55c83f8c80d69235e09a307f9a448c56c"
        },
        "date": 1591181959887,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6741,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161442 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6901,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168513 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8012346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18253468 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 90.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12599718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 73.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15180138 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4049282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 86.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14272398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7597119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7067257 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8103708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 489,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2418531 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1909,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "608343 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 201,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5802584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9281226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 59.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19095334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "72399740 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 145,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7970614 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 497,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2523548 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 699,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1726862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4614810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 288,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4164249 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25273899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9122388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 301,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "3684148 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1279,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "873786 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1109,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1086139 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1046,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 203,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6204778 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1010,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20051089 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "71798108 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "316219255 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1023,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 921647,
            "unit": "ns/op\t     156 B/op\t       2 allocs/op",
            "extra": "1286 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6559,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186061 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6961,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179878 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6932091 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "d6bee955de6fc91df0ee4ebef4ee33b85ff83b2f",
          "message": "Add recover by default",
          "timestamp": "2020-06-03T13:12:10+02:00",
          "tree_id": "5b11f30620a2cabec1438a8f30666778e3fe06bb",
          "url": "https://github.com/Fenny/fiber/commit/d6bee955de6fc91df0ee4ebef4ee33b85ff83b2f"
        },
        "date": 1591182824921,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6075,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201589 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6251,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6740390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15695978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13363593 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15504936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 316,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3345584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 95.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11623921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7852377 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7172565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7647644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 497,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2402106 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1951,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "639068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 214,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5513077 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8448834 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19061929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70336945 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 161,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8105436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 489,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2168907 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 637,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1894644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 258,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4541031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 272,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4366376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21555864 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8017783 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 294,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "4353162 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1328,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "929530 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1159,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "949364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 251,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4437495 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1094,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 57.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19742908 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59474636 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280946540 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859887 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "997083 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 977910,
            "unit": "ns/op\t     168 B/op\t       2 allocs/op",
            "extra": "1192 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6088,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187020 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5965,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "196388 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 174,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6294428 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "961fda2b8da004e114ee78e163f270a69016f412",
          "message": "Merge pull request #435 from Fenny/master\n\nBump Fasthttp v1.14.0",
          "timestamp": "2020-06-03T06:23:58-04:00",
          "tree_id": "efa42a74dad6024558a4d21c885045860a4b57c9",
          "url": "https://github.com/Fenny/fiber/commit/961fda2b8da004e114ee78e163f270a69016f412"
        },
        "date": 1591196305710,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6807,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160312 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7211,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6176276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14214236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8942517 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 92.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13599088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3167800 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11056454 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6574450 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6305134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6410640 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 589,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2036284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2172,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "557448 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 253,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4785968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6764929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 74.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15010040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59744373 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 193,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6178345 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 580,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2107526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 732,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1623922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 293,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4143826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 326,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3998994 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 66.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17985386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 210,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5178706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 348,
            "unit": "ns/op\t     230 B/op\t       4 allocs/op",
            "extra": "3171655 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1522,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "769738 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1353,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "767272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1417,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "815344 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 292,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3847874 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "837123 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15991972 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56981450 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "257721169 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1370,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "808276 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1300,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "916387 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1189962,
            "unit": "ns/op\t     186 B/op\t       2 allocs/op",
            "extra": "1076 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7076,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175099 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7093,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "178191 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 199,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6035977 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "4f8f3b74719e7cb7adf2e01c72553840c37f77c8",
          "message": "Add ErrorHandler",
          "timestamp": "2020-06-04T16:01:23+02:00",
          "tree_id": "1ff17475f81536331ee79d7d191837459d033004",
          "url": "https://github.com/Fenny/fiber/commit/4f8f3b74719e7cb7adf2e01c72553840c37f77c8"
        },
        "date": 1591279455414,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6075,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197401 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5743,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "210229 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7420987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15964263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 109,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11453390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 87.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13912258 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3441013 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 79,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13472149 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7527343 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8083090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7958365 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 446,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2713728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1780,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "672975 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 194,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6437262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9298818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 57.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21649612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 16.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "80505482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 151,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7296852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 474,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2509784 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 616,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1980015 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 230,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5233052 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 229,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4785178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21438030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11128984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9524893 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 248,
            "unit": "ns/op\t     233 B/op\t       4 allocs/op",
            "extra": "4877797 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1135,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1082,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1026,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 231,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5326478 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 975,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1241233 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 53.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22454278 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68919542 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334228737 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1068,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1074,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 994504,
            "unit": "ns/op\t     160 B/op\t       2 allocs/op",
            "extra": "1248 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6200,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166605 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6068,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "196744 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 178,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6931380 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5e3cf765ee72ec2551a01604330757984a40eb9e",
          "message": "Add App() & Middleware",
          "timestamp": "2020-06-04T16:05:17+02:00",
          "tree_id": "b257079b8e73551534a16bcc2b4325548357b81a",
          "url": "https://github.com/Fenny/fiber/commit/5e3cf765ee72ec2551a01604330757984a40eb9e"
        },
        "date": 1591279623486,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7557,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158364 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7518,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "155962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 211,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5634033 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11656270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8502234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12046102 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 408,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2929605 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 110,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11361583 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 197,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5909456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5422080 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 202,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5952248 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 599,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "1879218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2358,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "522811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 266,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4474261 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6088929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 74.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15916219 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56333804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 193,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6181839 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 595,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1983126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 787,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1510408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 312,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3797661 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 323,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3673509 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 76.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15356325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7391715 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6963715 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 321,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "3621932 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1536,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "794506 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1473,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "748712 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1398,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "842335 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 303,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3820032 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1220,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "927937 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16799734 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 24.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46817212 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 5.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225303724 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1381,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "752317 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1339,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "844712 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1240040,
            "unit": "ns/op\t     214 B/op\t       3 allocs/op",
            "extra": "937 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7700,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158281 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7537,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163590 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 216,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5465074 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "6043e175516efdcf9d1e592bb4ee352ce1bf6650",
          "message": "Add RequestID",
          "timestamp": "2020-06-04T16:07:49+02:00",
          "tree_id": "1e5dd14480fbf239b09278db01c1bf61f3022b8e",
          "url": "https://github.com/Fenny/fiber/commit/6043e175516efdcf9d1e592bb4ee352ce1bf6650"
        },
        "date": 1591279768859,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7431,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "151429 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7316,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "145263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7148900 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15016164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11431927 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14344255 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 321,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3622458 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 98.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13468363 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6960186 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6971305 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7825170 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 566,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2154236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2079,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "539130 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 218,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5205766 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8473269 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 59.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18310856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68096318 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 154,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8021344 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 508,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2321874 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 776,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1564383 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 272,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4341739 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 288,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3999244 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21439026 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9130670 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8312928 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 313,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "3702264 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1363,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "891728 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1277,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "912950 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961701 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 231,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4836621 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1056,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18258172 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64065742 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276173562 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "901934 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "949868 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1027713,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1101 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7435,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "150766 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7761,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156649 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6190225 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "11287ab85c07d3910d4307e1e45785920dd84335",
          "message": "Add new supporters",
          "timestamp": "2020-06-04T16:38:35+02:00",
          "tree_id": "fe9ad9c47c6adccc5603785b06f83eb74fdd98bd",
          "url": "https://github.com/Fenny/fiber/commit/11287ab85c07d3910d4307e1e45785920dd84335"
        },
        "date": 1591281617615,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6896,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166927 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6938,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 195,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6194263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 95.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12649356 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9692269 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 94.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12716968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 379,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3184482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11507368 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6578640 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 204,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5920704 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6183828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 575,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2051140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2211,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "540510 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 241,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4657045 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7453426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 71.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17199993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59513293 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 188,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6629464 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 559,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2113156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 734,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1621393 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 292,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4128718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 304,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3954313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 68.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18373400 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8268470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6527462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 305,
            "unit": "ns/op\t     232 B/op\t       4 allocs/op",
            "extra": "3936564 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1500,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "787190 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1388,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "845815 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "884070 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 281,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4310148 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1260,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "942270 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17796513 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56612638 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "250486893 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "843336 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1294,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "882541 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1155450,
            "unit": "ns/op\t     196 B/op\t       2 allocs/op",
            "extra": "1023 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6840,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170994 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6980,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164190 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 208,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5960811 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "312524705b4838b2dcf5829b328aa7ca780f946d",
          "message": "Update shields",
          "timestamp": "2020-06-04T17:00:03+02:00",
          "tree_id": "d7c5abefd913eabb5ebfe924034cb613612d829b",
          "url": "https://github.com/Fenny/fiber/commit/312524705b4838b2dcf5829b328aa7ca780f946d"
        },
        "date": 1591282904182,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7532,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167397 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7441,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7283286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15845112 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10430677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14029309 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 329,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3699607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 97.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13029171 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7099514 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7007366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7514774 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 565,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2091694 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1984,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "584748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 222,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5517813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8417220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19550016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65220052 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 155,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7788738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 529,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2188353 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 718,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1702894 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4681036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 287,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4130756 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23142972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9354198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8461069 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 337,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "3534079 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1388,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "880198 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1241,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "938924 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "971920 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 240,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4538968 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1090,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "939240 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18680034 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61346637 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "273007713 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "951091 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1035399 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1043986,
            "unit": "ns/op\t     176 B/op\t       2 allocs/op",
            "extra": "1141 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7516,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161170 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7785,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169778 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 178,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6540220 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c368bf5685ffe9cd0df85fcf63d291f145d94b70",
          "message": "Add mw",
          "timestamp": "2020-06-04T18:21:38+02:00",
          "tree_id": "6eff39e38b6a8bb3b02012a45e7fb0c881e2d75f",
          "url": "https://github.com/Fenny/fiber/commit/c368bf5685ffe9cd0df85fcf63d291f145d94b70"
        },
        "date": 1591287796939,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7102,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170145 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7381,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "149628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7393520 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16649049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11019690 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 76.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15192992 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 306,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3795541 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 86,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13923328 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8010270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7513906 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7675854 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 544,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2286004 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1912,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "573984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 206,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5453169 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9454760 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 57.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20050094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "72329254 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 145,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8284027 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 498,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2437086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 694,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1804555 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 248,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4918833 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 267,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4670678 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24015564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10137464 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9334533 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 295,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "3686755 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1343,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "965809 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1197,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "972061 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "963414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 223,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5454518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1034,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19998901 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66070569 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296180476 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1092,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "969211 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 972028,
            "unit": "ns/op\t     160 B/op\t       2 allocs/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6987,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172322 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7025,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157262 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 170,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7125217 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "55b15ecf5c30798a6aba5d320cdf2c3e1a0554a4",
          "message": "Update basic_auth.go",
          "timestamp": "2020-06-04T18:34:02+02:00",
          "tree_id": "fa8e249b3c6baca62db4f553ea51ec7460b0c75c",
          "url": "https://github.com/Fenny/fiber/commit/55b15ecf5c30798a6aba5d320cdf2c3e1a0554a4"
        },
        "date": 1591288545152,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 8027,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "140125 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 8547,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "148674 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6736098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 85.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14111804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9611097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13379104 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 356,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3408906 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 102,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11928823 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6690249 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6562748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6661540 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 603,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "1979035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2509,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "496461 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 237,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5075635 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7668145 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18069668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58691582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 164,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6875042 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 567,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2156725 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 759,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1609530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 295,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4037728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 309,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3792978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19148043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8397838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7732203 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 346,
            "unit": "ns/op\t     259 B/op\t       4 allocs/op",
            "extra": "3394462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1509,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "754165 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1385,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "867769 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1283,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "884163 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 256,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4497895 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "944468 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16784425 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55978430 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "250791271 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1259,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "875282 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1250,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "916738 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1133529,
            "unit": "ns/op\t     199 B/op\t       2 allocs/op",
            "extra": "1006 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 8061,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "140623 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 8275,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "152590 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 202,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5817939 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "01cb6b3baee9001152bd0b21fc3fb461fff08f3f",
          "message": "Merge remote-tracking branch 'upstream/master'",
          "timestamp": "2020-06-04T18:34:14+02:00",
          "tree_id": "fa8e249b3c6baca62db4f553ea51ec7460b0c75c",
          "url": "https://github.com/Fenny/fiber/commit/01cb6b3baee9001152bd0b21fc3fb461fff08f3f"
        },
        "date": 1591288561678,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6983,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177474 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7145,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171675 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 195,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6151604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 95.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10722378 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9720757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 95.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12943287 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 385,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3139525 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11283019 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6608412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 202,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6019308 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6462319 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 579,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2123347 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2400,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "501366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 241,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4493222 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6705906 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16666884 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60506282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 182,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6753686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 571,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2103931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 747,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1578712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 298,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3961177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 304,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3946092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17766564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7853608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7336490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 311,
            "unit": "ns/op\t     237 B/op\t       4 allocs/op",
            "extra": "3810829 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1503,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "778256 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1375,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "851445 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1340,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890712 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 286,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4258666 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1233,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932685 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17816468 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56125396 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "247957858 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1287,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "895993 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1324,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "898683 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1135791,
            "unit": "ns/op\t     197 B/op\t       2 allocs/op",
            "extra": "1015 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6972,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177877 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6976,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176380 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 212,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5493018 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "3090d789635991dfe1bc0dfe8d75b6868b7b9c25",
          "message": "Update README.md",
          "timestamp": "2020-06-04T18:35:57+02:00",
          "tree_id": "3fe039a17c9bb7773f0c997f2a0473547a235329",
          "url": "https://github.com/Fenny/fiber/commit/3090d789635991dfe1bc0dfe8d75b6868b7b9c25"
        },
        "date": 1591288655144,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6816,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172768 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6833,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6069052 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 96.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12682131 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9242073 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12577724 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 377,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3226182 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10820733 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6471772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 197,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5930527 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6368905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 586,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2110842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2263,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "505873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 248,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4783234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7615455 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 71.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16527891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59365160 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 175,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7016877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 551,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1999414 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 724,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1665234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 287,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4244470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 296,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4053112 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 66.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17731204 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8096889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7345945 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 301,
            "unit": "ns/op\t     239 B/op\t       4 allocs/op",
            "extra": "3762690 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1525,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "779050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1362,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "880148 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "899660 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 280,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4263177 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "982812 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17964102 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56155496 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "255183723 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1280,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924380 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1236,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "846514 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1122152,
            "unit": "ns/op\t     188 B/op\t       2 allocs/op",
            "extra": "1068 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6798,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182175 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6878,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172777 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 203,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6025606 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "16ff1b07f8df55884e72ea74028ca3d7b661be0f",
          "message": "Update spacing",
          "timestamp": "2020-06-04T18:37:45+02:00",
          "tree_id": "64425d34536fdb65c02ef6d4fae571b7cad9bab8",
          "url": "https://github.com/Fenny/fiber/commit/16ff1b07f8df55884e72ea74028ca3d7b661be0f"
        },
        "date": 1591288781856,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7161,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "151064 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7277,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "183230 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7096030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14442513 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12374730 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15507156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 324,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3561187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 90.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12432842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7473933 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7875808 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7597276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 622,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2208639 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2018,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "561633 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5214962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8866238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 59.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19110912 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63802564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 162,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6961591 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 516,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2220332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 658,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1809502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 254,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4704056 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 271,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4278616 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23052908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10324980 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8528472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 297,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "3506803 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1328,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "852176 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1269,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "921981 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "926832 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 237,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4869434 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1111,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "986626 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19001373 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62148285 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "267105024 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "990678 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1075527,
            "unit": "ns/op\t     171 B/op\t       2 allocs/op",
            "extra": "1168 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7742,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166738 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 8006,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169694 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6512247 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "d94f2c5cf8a6ae48d36040c04eb70d6d1faf756d",
          "message": "Update basic_auth_test.go",
          "timestamp": "2020-06-04T18:53:35+02:00",
          "tree_id": "e050f12d8e402d58b764a7a29acd3cbbf6aa3972",
          "url": "https://github.com/Fenny/fiber/commit/d94f2c5cf8a6ae48d36040c04eb70d6d1faf756d"
        },
        "date": 1591289719364,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7395,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158776 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7459,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7099785 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 80.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15282346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 106,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11630428 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14183463 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 329,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3571551 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 91.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13175930 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7464999 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6916471 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7337296 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 564,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2074492 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2097,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "570984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 233,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5523504 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8400496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17733697 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61361858 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 156,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7667958 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 536,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2243870 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 713,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1610155 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 282,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4484106 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 293,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4125993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 54.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22067078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9437032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8691046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 321,
            "unit": "ns/op\t     247 B/op\t       4 allocs/op",
            "extra": "3602410 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1428,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "850146 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1295,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "883183 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "919476 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 232,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5023706 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1097,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978138 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19092428 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60154262 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253191498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1220,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "944762 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952652 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1093856,
            "unit": "ns/op\t     180 B/op\t       2 allocs/op",
            "extra": "1114 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7726,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160579 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7783,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "155025 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6216254 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "203b39e045c49d967e551b517419f079c3d76974",
          "message": "Update ctx_test.go",
          "timestamp": "2020-06-04T19:06:35+02:00",
          "tree_id": "b7795360c8e7a75f22f823f1c16e9238c0202c2d",
          "url": "https://github.com/Fenny/fiber/commit/203b39e045c49d967e551b517419f079c3d76974"
        },
        "date": 1591290491489,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7353,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165732 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7088,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7372468 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15307824 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12845173 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14777331 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 308,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3595255 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 93.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13112983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7365489 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7885988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7629937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 548,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2058518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2100,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "575707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5048888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8130084 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20898392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66684741 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 152,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7739618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 518,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2414350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 664,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1731960 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 261,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4676773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 284,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4423948 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 55.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21834265 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8864403 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8170016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 305,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "3734241 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1388,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "877378 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1213,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "899109 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 240,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4957893 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1060,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1126972 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19551482 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62044602 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "279385825 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1007479,
            "unit": "ns/op\t     171 B/op\t       2 allocs/op",
            "extra": "1173 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7234,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160134 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7127,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174194 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 179,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7048086 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "803cb2bd459d487919b14ddc3a543620e1a4914c",
          "message": "Add tests",
          "timestamp": "2020-06-05T00:20:10+02:00",
          "tree_id": "9b2dbd024dbe87d80de4828d78fd0bc1f718d6dd",
          "url": "https://github.com/Fenny/fiber/commit/803cb2bd459d487919b14ddc3a543620e1a4914c"
        },
        "date": 1591309307449,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6514,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181309 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6636,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "178096 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8546618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16284367 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 90.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13479672 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 75.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15801201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4008807 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 87,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14298208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8269803 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7101525 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9123152 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 518,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2474238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1814,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "693985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 186,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6651360 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9659532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 53.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21924500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 16.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81133033 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 138,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8661988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 476,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2513931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 634,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1871175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 238,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5311078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 264,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4575620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 48.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23234127 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10779062 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10075902 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 291,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "4399083 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1206,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1093,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1063,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 222,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5666554 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1056,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19667536 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 16.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68014047 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "320668290 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1012,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1039,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "994578 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 889378,
            "unit": "ns/op\t     155 B/op\t       2 allocs/op",
            "extra": "1288 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6615,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174524 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6461,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175340 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 164,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7536793 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "61ae1c17219b3cb703048c1c4b3f24b0db0c6edd",
          "message": "Update middleware",
          "timestamp": "2020-06-05T02:37:53+02:00",
          "tree_id": "0571bd051b863879d2778dad77d382fa2ab5448b",
          "url": "https://github.com/Fenny/fiber/commit/61ae1c17219b3cb703048c1c4b3f24b0db0c6edd"
        },
        "date": 1591317570799,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6624,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186057 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6424,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7819953 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17709442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14717263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 76.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14912175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 305,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3696446 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 79.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13325001 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7849029 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7649258 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9215688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 485,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2452994 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1733,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "710136 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 182,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6909890 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9266973 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 58.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19986187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65823590 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 140,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8370057 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 495,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2526955 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 655,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1679595 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 239,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4860361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 258,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4700972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 51.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20242432 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10501759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9607446 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 277,
            "unit": "ns/op\t     244 B/op\t       4 allocs/op",
            "extra": "4573855 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1228,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1116,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "958572 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1083,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 208,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6114026 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 981,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1260548 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 58.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19581586 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69750020 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "312877659 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1051,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "995754 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1072,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 971740,
            "unit": "ns/op\t     165 B/op\t       2 allocs/op",
            "extra": "1216 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6653,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173096 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6758,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "190113 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7175899 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "a64afff3080d5087bb6cbae431c202bc9f03d393",
          "message": "up",
          "timestamp": "2020-06-05T02:50:39+02:00",
          "tree_id": "3de56020c9eb06ad5642cc02460ef14e48c39507",
          "url": "https://github.com/Fenny/fiber/commit/a64afff3080d5087bb6cbae431c202bc9f03d393"
        },
        "date": 1591318338947,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7173,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160891 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7560,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161115 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7137075 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15248274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11529454 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13449366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3539176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 91.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13857624 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7635790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7239807 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7571128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 562,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2205270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2019,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "577215 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 216,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5751403 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9119278 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18593314 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62306932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 147,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7671796 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 522,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2293414 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 700,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1699068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4578794 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 279,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4271815 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 54.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20891974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9995242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8677263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 334,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "3625048 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1355,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "848838 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1212,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "903147 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 222,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5262644 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1071,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18742980 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60314239 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270723865 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "901992 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1004901,
            "unit": "ns/op\t     171 B/op\t       2 allocs/op",
            "extra": "1170 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7215,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164872 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7234,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165512 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 179,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6688149 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "851467d4afb4d71903151a01691340cc210f3e3a",
          "message": "Update version",
          "timestamp": "2020-06-05T16:00:04+02:00",
          "tree_id": "acad4c4deca32e33951f6e7a8cd0eba072e90866",
          "url": "https://github.com/Fenny/fiber/commit/851467d4afb4d71903151a01691340cc210f3e3a"
        },
        "date": 1591365705814,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7844,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "152301 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7729,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157854 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6993349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14925001 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11068006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13930275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 351,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3522073 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 96.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11351961 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7366983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6836968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6778695 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 574,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2109031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2140,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "591028 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 220,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5484632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8471084 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18437193 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56738798 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 156,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7294816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 535,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2291990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 736,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1643742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 266,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4572951 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 287,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3960154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20399077 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8381235 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7967719 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 302,
            "unit": "ns/op\t     248 B/op\t       4 allocs/op",
            "extra": "3595592 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1390,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "808729 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1273,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "895689 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "916747 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 249,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5160753 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "982627 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17232080 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58860721 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259171614 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1263,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "883184 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1258,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "969716 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1059743,
            "unit": "ns/op\t     177 B/op\t       2 allocs/op",
            "extra": "1132 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7699,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157278 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7773,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164186 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6423471 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "f2a28e86f250e7168663b75e332ca41a1077c52a",
          "message": "Add FS to SendFile",
          "timestamp": "2020-06-05T17:16:47+02:00",
          "tree_id": "8f72d3f672130c8b386beaac3630c6a161f20f58",
          "url": "https://github.com/Fenny/fiber/commit/f2a28e86f250e7168663b75e332ca41a1077c52a"
        },
        "date": 1591370309984,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7494,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "148641 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7700,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7052181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15853456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11875393 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14479639 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 334,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3361299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12598334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7203908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6428006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7289702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 545,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2189161 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2416,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "481069 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 228,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5547579 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8294818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18258202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64076799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 154,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7737969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 555,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2163862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 702,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1681718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 263,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4299992 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 274,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4446573 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 54.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21848430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9812242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8438604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 336,
            "unit": "ns/op\t     255 B/op\t       4 allocs/op",
            "extra": "3464005 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1371,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "892540 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1299,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "912745 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "915747 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 222,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5168872 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18070310 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59083033 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "271968055 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "923736 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "948105 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1071828,
            "unit": "ns/op\t     176 B/op\t       2 allocs/op",
            "extra": "1137 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7584,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157825 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7766,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160424 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6352812 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "89833b714e57903b169814e15216e65336031e03",
          "message": "v1.11",
          "timestamp": "2020-06-06T01:05:40+02:00",
          "tree_id": "1a1124a3c18fbe239cef79482208b8aad0b5e643",
          "url": "https://github.com/Fenny/fiber/commit/89833b714e57903b169814e15216e65336031e03"
        },
        "date": 1591398447954,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6594,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153694 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6606,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5841163 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14532496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10863614 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 88.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13812804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 378,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3190045 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 97,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12017707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6820268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6234260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6634515 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 555,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2196114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2239,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "529322 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 233,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5350114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7945788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14518996 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61760596 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 173,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7006312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 542,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2204205 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 703,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1740319 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 276,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4364478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 289,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3984588 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 69.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17614549 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8430068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6925612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 289,
            "unit": "ns/op\t     264 B/op\t       4 allocs/op",
            "extra": "4122985 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1422,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "820496 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1306,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "886990 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1258,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "904896 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 274,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4381659 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "917361 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18981896 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58148893 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277326321 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1280,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "914014 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890776 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1084876,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1120 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6576,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185596 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6677,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167947 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 198,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5871050 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "ed275e199d28828f14395d48a932b4f7a43ddc18",
          "message": "Add Routes",
          "timestamp": "2020-06-06T04:16:52+02:00",
          "tree_id": "be356171e5bebf5758bb40daaec117f53f468383",
          "url": "https://github.com/Fenny/fiber/commit/ed275e199d28828f14395d48a932b4f7a43ddc18"
        },
        "date": 1591409912740,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7255,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165166 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7477,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172521 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7356775 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 71.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16391797 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11906346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16333926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 303,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3948634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 86.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13200632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7763170 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7607185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8373949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 492,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2502721 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1729,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "685347 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 180,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6142842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10512669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22665183 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81129214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 134,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8973410 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 448,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2750864 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 582,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2072090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 230,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5541723 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 234,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4904317 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27210009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12079717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10338973 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 266,
            "unit": "ns/op\t     263 B/op\t       4 allocs/op",
            "extra": "4137919 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1178,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1060,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1001,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 184,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6519937 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1306357 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 53.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19320474 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 16.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69905764 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "323351599 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1056,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1204888 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1064,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 944396,
            "unit": "ns/op\t     166 B/op\t       2 allocs/op",
            "extra": "1206 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6667,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182794 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6734,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179936 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 161,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7456900 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "e1c74cb24d0ddc69cf0bb7fbd7f95da17dd3f2f0",
          "message": "Update app.go",
          "timestamp": "2020-06-06T04:17:15+02:00",
          "tree_id": "0e3a8530ee7de9703809687420090f42734bff0c",
          "url": "https://github.com/Fenny/fiber/commit/e1c74cb24d0ddc69cf0bb7fbd7f95da17dd3f2f0"
        },
        "date": 1591409931334,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7453,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "154360 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7631,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161672 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7006897 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15605065 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11735572 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15092534 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 336,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3542421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 93.6,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12903738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7143655 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6910069 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7354652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2152784 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1997,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "593827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 215,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5536352 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8480413 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19375978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62634640 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 161,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7448689 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 535,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2229037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 707,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1719156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 273,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4381556 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 288,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4093971 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 55.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21391280 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9795877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8541003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 333,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "3481050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1377,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "867219 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1274,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "937141 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "971156 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 229,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5179702 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1120,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "997615 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 66.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17622007 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59737646 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "266518474 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "940152 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1210,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952964 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1077296,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1084 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7571,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157986 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7598,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156259 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 182,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6570396 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "e255d4441c3b6043974ab5ede985b838657ccf60",
          "message": "Update README.md",
          "timestamp": "2020-06-06T04:44:29+02:00",
          "tree_id": "4c47aad9ed0bec530557ffc45079d95561747515",
          "url": "https://github.com/Fenny/fiber/commit/e255d4441c3b6043974ab5ede985b838657ccf60"
        },
        "date": 1591411582211,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6476,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181075 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6528,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "188065 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6339499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 81.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14908122 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10828551 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14592267 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3315313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 98,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10948141 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7037150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 197,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5959603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6755209 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 550,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2194350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1985,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "594364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5319522 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7719555 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15706999 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63207835 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 170,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6962499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 540,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2208116 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1739558 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 271,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4452289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 284,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4251960 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 71.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16772169 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8202655 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7586613 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 284,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "4214832 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1450,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "847364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1265,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "915810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "950047 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 267,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4504033 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 82.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14517037 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58376913 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "266151548 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "954468 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1262,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "947182 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1115379,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1083 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6461,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180816 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6517,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186381 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 191,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6320289 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "d0abd87f3afb953027dfc6b2b6f0585fdaca248c",
          "message": "Update colors",
          "timestamp": "2020-06-06T04:47:26+02:00",
          "tree_id": "b476dc7604ccf1b369913e9ec6f82698845578af",
          "url": "https://github.com/Fenny/fiber/commit/d0abd87f3afb953027dfc6b2b6f0585fdaca248c"
        },
        "date": 1591411742267,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7783,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "149226 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7848,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "143598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7051356 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15830508 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11784954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15090025 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 335,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3483834 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 95.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12629954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7139362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6756295 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7324335 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 566,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2135871 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2180,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "542306 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 217,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5544234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8732718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 63.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19601878 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62064609 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7630303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 536,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2260647 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 713,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1680758 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 274,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4402652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 282,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4213579 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19487330 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9296098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8310866 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 340,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "3505012 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1395,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "860863 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1284,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "921060 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1235,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "944514 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 236,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5142544 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1066652 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17068681 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59162445 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "263269333 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1210,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952569 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1232,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "841035 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1092432,
            "unit": "ns/op\t     184 B/op\t       2 allocs/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7623,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "155067 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7790,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156436 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 186,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6484215 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "b928717dc90ed1708efb99c79c9c2d19bb6cc75e",
          "message": "Move sections",
          "timestamp": "2020-06-06T04:56:56+02:00",
          "tree_id": "b90bc19d482795607acce8b07d427c82b03f694e",
          "url": "https://github.com/Fenny/fiber/commit/b928717dc90ed1708efb99c79c9c2d19bb6cc75e"
        },
        "date": 1591412319611,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5288,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "238261 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5141,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "205270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8179804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 65.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16147087 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 89.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12508027 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16102432 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4394516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 76.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "16287178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8531268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7622595 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8053774 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 471,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2583862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1854,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "615861 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 194,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6156366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9215482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 54.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21286148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "74503836 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 137,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9043374 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 439,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2727358 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 567,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2162708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 227,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5122886 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 231,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5355765 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20265007 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 111,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10953750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10134523 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 256,
            "unit": "ns/op\t     239 B/op\t       4 allocs/op",
            "extra": "4713471 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1252,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "924859 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1040,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1007,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 213,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5724960 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 943,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1292370 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 66.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17472672 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 16.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69515475 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "325835676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1038,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1240536 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 970,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1227447 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 887908,
            "unit": "ns/op\t     146 B/op\t       2 allocs/op",
            "extra": "1372 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5270,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "228249 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5351,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "234226 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 166,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6933579 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "0924082b6e8f31d639a24ea3b50a980d87566d17",
          "message": "Update benches",
          "timestamp": "2020-06-06T04:57:43+02:00",
          "tree_id": "5044a39ba841ecb99e37112ac74de8725fd2fd9d",
          "url": "https://github.com/Fenny/fiber/commit/0924082b6e8f31d639a24ea3b50a980d87566d17"
        },
        "date": 1591412360912,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6551,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181797 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6443,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185106 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6413937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 82.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14474916 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10957850 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14377090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3280975 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 96.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12422545 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7113208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6310827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7097785 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 553,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2152716 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2099,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "601654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 226,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5103822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7991784 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17483299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63081658 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 167,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7272442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 526,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2250447 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1757805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 273,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4450131 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 281,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4133719 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17719524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8606973 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7418792 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 278,
            "unit": "ns/op\t     262 B/op\t       4 allocs/op",
            "extra": "4173045 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1417,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "854814 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1272,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "903182 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1259,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "942747 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 270,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4510315 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 82.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14417212 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58514726 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "265570407 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "958632 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1236,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "955707 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1077438,
            "unit": "ns/op\t     180 B/op\t       2 allocs/op",
            "extra": "1113 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6530,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "190100 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6483,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186862 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 190,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6327266 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "2863e33090d7d268b0f6a7ed80d37fbb1abbc2aa",
          "message": "Update benchmark link",
          "timestamp": "2020-06-06T05:04:45+02:00",
          "tree_id": "94b946d4fae4d25fc5bb771a34ba5a5a9d5ebf8a",
          "url": "https://github.com/Fenny/fiber/commit/2863e33090d7d268b0f6a7ed80d37fbb1abbc2aa"
        },
        "date": 1591412784137,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7725,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "150321 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7879,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158210 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6603338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15083708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11491444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14649039 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 335,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3588854 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 100,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11796020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7054993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6816482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7385955 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 561,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2048516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2148,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "532443 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 215,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5281088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8717614 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18554376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59510852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 161,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7651570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 538,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2212845 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 716,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1704090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 273,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4445634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 288,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4233135 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20526512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9291812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8305126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 339,
            "unit": "ns/op\t     256 B/op\t       4 allocs/op",
            "extra": "3439927 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1431,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "852187 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1273,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "861759 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1232,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "941516 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 234,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5085992 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17710900 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59574355 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "265441863 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1209,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "948608 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "903505 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1106042,
            "unit": "ns/op\t     184 B/op\t       2 allocs/op",
            "extra": "1087 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7736,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "142435 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7897,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158581 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 185,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6542961 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "45861a01b28f1305417152b381c6008c4a0940d5",
          "message": "Update README.md",
          "timestamp": "2020-06-06T05:06:15+02:00",
          "tree_id": "743aeaf20124b13d7219edd584a8f60ca4312a4c",
          "url": "https://github.com/Fenny/fiber/commit/45861a01b28f1305417152b381c6008c4a0940d5"
        },
        "date": 1591412871533,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6582,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195282 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6439,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "188630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7543046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17764160 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 89.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13301815 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 64.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17413994 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 284,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4378646 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 84.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12868186 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8075226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8399107 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7341469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 499,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2451327 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1755,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "574771 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 194,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6484782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9128952 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 51.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21938652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 16.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "71372050 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 134,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8122987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 466,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2558058 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 588,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1768459 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 238,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5100498 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 247,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4287128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23207653 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12241987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 120,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10296837 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 305,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "3680434 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1236,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "892296 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1079,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1054,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 205,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6150276 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 991,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1202935 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21494228 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67441304 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "308380572 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1053,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1196222 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1000,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 928818,
            "unit": "ns/op\t     160 B/op\t       2 allocs/op",
            "extra": "1254 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6778,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "191101 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6690,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "189475 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6898119 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "ae47b625c2d2f85bfb0ebe497974ecb9579207dd",
          "message": "Update licenses & logo",
          "timestamp": "2020-06-06T05:10:00+02:00",
          "tree_id": "2dccbf832aca88413d22c8cad7cc38e221d64be6",
          "url": "https://github.com/Fenny/fiber/commit/ae47b625c2d2f85bfb0ebe497974ecb9579207dd"
        },
        "date": 1591413099267,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7535,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168362 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7537,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7401216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 72.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16256527 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 95.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11857219 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16822851 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 330,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3871692 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 91.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12983688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7565458 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6959090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7977984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 558,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2232171 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2023,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "593984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5579743 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8866054 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19974273 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63908574 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 151,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7897320 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 509,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2389208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 684,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1750018 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4752450 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 279,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4633858 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 51.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22013445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9855180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8368502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 315,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "3685047 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1347,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "965121 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1235,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "882744 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 218,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5379124 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1086,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18762997 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62444726 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "267694534 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "881178 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1033564,
            "unit": "ns/op\t     163 B/op\t       2 allocs/op",
            "extra": "1231 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7236,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160729 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7447,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166354 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 178,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6456326 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "3378790173e70b68564bbdf751fabc4a14c589d0",
          "message": "Fix race",
          "timestamp": "2020-06-06T05:21:41+02:00",
          "tree_id": "37195a6c23ab7a9b54f10bc6336590367861dba5",
          "url": "https://github.com/Fenny/fiber/commit/3378790173e70b68564bbdf751fabc4a14c589d0"
        },
        "date": 1591413797997,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6166,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177716 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6083,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193909 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8649397 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 60.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20674189 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 81.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15078591 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 61.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17713543 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 261,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4449031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 79.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14314436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8859409 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7824262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8065171 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 457,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2579985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1711,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "729560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 169,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6868827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 109,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11093109 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 50.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23197915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "76503454 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 129,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9585426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 429,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2789020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 573,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2100573 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 219,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5589895 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 220,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5630660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25952383 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10960812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10591692 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 264,
            "unit": "ns/op\t     237 B/op\t       4 allocs/op",
            "extra": "4757071 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1153,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "950457 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1031,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 949,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1262445 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 184,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6648339 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 968,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1220553 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 51.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20299711 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 16.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "80745631 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "333047602 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 995,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1231790 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 967,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1276360 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 869498,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "1388 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6353,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198669 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6163,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "190801 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 152,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7487896 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "bd3dd11aea4ab0084885e6f5a2b8ba460bebd2d8",
          "message": "Update test coverage",
          "timestamp": "2020-06-06T06:55:28+02:00",
          "tree_id": "8587e9159716d9f17024b01d844e2ea0fa600599",
          "url": "https://github.com/Fenny/fiber/commit/bd3dd11aea4ab0084885e6f5a2b8ba460bebd2d8"
        },
        "date": 1591419426299,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6961,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160192 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7355,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169167 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6122652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14395549 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9971929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14364325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 362,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3321736 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 98.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11987463 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6700184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6449040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6580616 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 580,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2095435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2184,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "560221 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 239,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5083195 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7533783 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16336078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59655889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 163,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7230778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 535,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2115004 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 714,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1706520 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 287,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4115239 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 299,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3970342 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 65.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8603470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7460520 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 305,
            "unit": "ns/op\t     265 B/op\t       4 allocs/op",
            "extra": "4098900 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1477,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "873992 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1210,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "853146 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952526 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 260,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4577895 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "973736 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19379748 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64770026 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 5.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "238161091 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "912591 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1293,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "893031 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1148570,
            "unit": "ns/op\t     187 B/op\t       2 allocs/op",
            "extra": "1071 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6998,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171060 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7143,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164865 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 205,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5842653 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "3c5fb0f426bfeccaf911a91c0589efd8531aa042",
          "message": "📙 utf-8 support",
          "timestamp": "2020-06-06T07:31:33+02:00",
          "tree_id": "8587e9159716d9f17024b01d844e2ea0fa600599",
          "url": "https://github.com/Fenny/fiber/commit/3c5fb0f426bfeccaf911a91c0589efd8531aa042"
        },
        "date": 1591421593639,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7701,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "152272 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7712,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157555 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6987180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15417508 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11405832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14898984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3532317 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 97,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11926758 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6521913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6908863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7382654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 563,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2087328 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2214,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "567474 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 215,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5529549 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8540098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17977126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62465162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 156,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7503108 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 553,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2176557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 715,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1680919 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 275,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4254964 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 286,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4100517 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20327097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8535037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8205524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 333,
            "unit": "ns/op\t     249 B/op\t       4 allocs/op",
            "extra": "3564380 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1478,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "836484 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1277,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "849870 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924282 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 238,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5083952 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "937671 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16896484 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58263315 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "257455141 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1237,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "842322 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "947456 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1096337,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1098 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7820,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "155994 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7963,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158292 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 197,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6465828 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "3580b47b6ef4ff557fb5a1b33f6fd528769e2114",
          "message": "🩹 Fix Golint",
          "timestamp": "2020-06-06T07:35:12+02:00",
          "tree_id": "ec2f3668b361d83310545baf8549d76c35050b96",
          "url": "https://github.com/Fenny/fiber/commit/3580b47b6ef4ff557fb5a1b33f6fd528769e2114"
        },
        "date": 1591421810764,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7806,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156308 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7681,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "145608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7049737 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15120229 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11818345 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14688332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 341,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3546811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 96.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12899040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7147009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 185,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6684313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7424635 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 562,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2157439 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2120,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "557140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 218,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5039545 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8667774 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19536669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63522217 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7868323 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 543,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2265576 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 713,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1641993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 269,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4460757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 285,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4207872 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21267566 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9018044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8219677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 352,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "3509044 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1461,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "828667 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1315,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "866352 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "899908 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 232,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5051750 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "935221 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17986293 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54328980 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "264080913 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "928255 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "953683 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1092259,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1101 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7748,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153637 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7764,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "145483 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 189,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6252499 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "bf3c36688f6a9b79fab99e9e6ed9cfd90cdc6c23",
          "message": "🚑 Custom Error Interface",
          "timestamp": "2020-06-06T18:54:02+02:00",
          "tree_id": "937d974fab38b7a2a4884e47e3f910d5773715f0",
          "url": "https://github.com/Fenny/fiber/commit/bf3c36688f6a9b79fab99e9e6ed9cfd90cdc6c23"
        },
        "date": 1591462539448,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7321,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "150241 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7622,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "131916 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6916161 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15935187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11678026 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14136985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 322,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3712524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12913808 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7127572 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6756241 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7316768 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 566,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2170497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2039,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "550060 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 214,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5586543 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8769378 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18720140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63197010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 157,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7715629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 529,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2232891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 713,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1723005 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 271,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4436396 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 284,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4174140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19902469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9101413 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8436369 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 342,
            "unit": "ns/op\t     256 B/op\t       4 allocs/op",
            "extra": "3432691 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1401,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "870536 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1280,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "900232 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859507 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 236,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5131860 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18276612 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61994886 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "261898615 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1216,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "919552 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "940342 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1098034,
            "unit": "ns/op\t     189 B/op\t       2 allocs/op",
            "extra": "1058 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7524,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159309 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7676,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156548 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6477544 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "749aac17bb81ed08b2bb9b89ae680f6372ee2c40",
          "message": "🐳 Internal Error Handling",
          "timestamp": "2020-06-06T19:02:28+02:00",
          "tree_id": "e851dd476f6b4784286e4610b100247737e94892",
          "url": "https://github.com/Fenny/fiber/commit/749aac17bb81ed08b2bb9b89ae680f6372ee2c40"
        },
        "date": 1591463048537,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5856,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "219942 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5923,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6442215 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 73.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14177266 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10748692 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17651152 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 327,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4284750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 82.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14302201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8720144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7923907 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6883134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 476,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2543365 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1852,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "729294 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 197,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5772195 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7919773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 57.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22629954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 16.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84076345 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 157,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9262656 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 486,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2925592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 638,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1939695 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 242,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4786406 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 246,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4112787 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20447936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11042887 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10207185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 249,
            "unit": "ns/op\t     231 B/op\t       4 allocs/op",
            "extra": "4932052 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1258,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1219,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1190160 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 229,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5807014 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 986,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1216345 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22185420 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55627334 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298395519 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1058,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1070,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 910310,
            "unit": "ns/op\t     135 B/op\t       1 allocs/op",
            "extra": "1480 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5857,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "237756 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5720,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176666 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 181,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6375026 times\n2 procs"
          }
        ]
      }
    ]
  }
}