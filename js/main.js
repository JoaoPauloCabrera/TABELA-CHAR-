const AL = document.querySelector('.AL-input');
const AK = document.querySelector('.AK-input');
const AZ = document.querySelector('.AZ-input');
const AR = document.querySelector('.AR-input');
const CA = document.querySelector('.CA-input');
const CO = document.querySelector('.CO-input');
const CT = document.querySelector('.CT-input');
const DE = document.querySelector('.DE-input');
const DC = document.querySelector('.DC-input');
const FL = document.querySelector('.FL-input');
const GA = document.querySelector('.GA-input');
const HI = document.querySelector('.HI-input');
const ID = document.querySelector('.ID-input');
const IL = document.querySelector('.IL-input');
const IN = document.querySelector('.IN-input');
const IA = document.querySelector('.IA-input');
const KS = document.querySelector('.KS-input');
const KY = document.querySelector('.KY-input');
const LA = document.querySelector('.LA-input');
const ME = document.querySelector('.ME-input');
const MD = document.querySelector('.MD-input');
const MA = document.querySelector('.MA-input');
const MI = document.querySelector('.MI-input');
const MN = document.querySelector('.MN-input');
const MS = document.querySelector('.MS-input');
const MO = document.querySelector('.MO-input');
const MT = document.querySelector('.MT-input');
const NE = document.querySelector('.NE-input');
const NV = document.querySelector('.NV-input');
const NH = document.querySelector('.NH-input');
const NJ = document.querySelector('.NJ-input');
const NM = document.querySelector('.NM-input');
const NY = document.querySelector('.NY-input');
const NC = document.querySelector('.NC-input');
const ND = document.querySelector('.ND-input');
const OH = document.querySelector('.OH-input');
const OK = document.querySelector('.OK-input');
const OR = document.querySelector('.OR-input');
const PA = document.querySelector('.PA-input');
const RI = document.querySelector('.RI-input');
const SC = document.querySelector('.SC-input');
const SD = document.querySelector('.SD-input');
const TN = document.querySelector('.TN-input');
const TX = document.querySelector('.TX-input');
const UT = document.querySelector('.UT-input');
const VT = document.querySelector('.VT-input');
const VA = document.querySelector('.VA-input');
const WA = document.querySelector('.WA-input');
const WV = document.querySelector('.WV-input');
const WI = document.querySelector('.WI-input');
const WY = document.querySelector('.WY-input');


const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
	type: 'bar',

//tabela
	data: {
		labels: ['AL ', 'AK', 'AZ', 'AR','CA','CO','CT','DE','DC','FL ', 'GA', 'HI', 'ID','IL',
		'IN','IA','KS','KY',
		'LA ', 'ME', 'MD', 'MA','MI','MN','MS','MO','MT','NE ', 'NV', 'NH', 'NJ','NM','NY',
		'NC','ND','OH','OK',
		'OR ', 'PA', 'RI', 'SC','SD','TN','TX','UT','VT','VA ', 'WA', 'WV', 'WI','WY'],
		datasets: [
			{
				label: 'Total-Murdes',
				data: [135,19,232,93,1257,65,97,38,99,669,376,7,12,364,142,21,63,116,351,11,293,118,413,53,120,321,12,32,84,5,246,67,517,286,4,310,111,36,457,16,207,8,219,805,22,2,250,93,27,97,5],
				backgroundColor:   ['#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00',
									'#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00',
									'#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00',
									'#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00',
									'#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00','#ECFF00'],

				
			}, {
			   
				label: 'Total-Population',
				data: [4779736,712031,6392017,2915918,37253956,5029196,3574097,897934,601723,19687653,9920000,1360301,1567582,12830632,6483802,3046355,2853118,4339367,4533372,1328361,5773552,6547629,9883640,5303925,296729,5988927,989415,1826341,2700551,316470,8791894,2059179,19378102,9535483,672591,11536504,375135,3831074,12702379,1052567,4625364,814180,6346105,25145561,2763885,625741,8001024,6724540,1852994,5686986,563626],
				backgroundColor:   ['#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF',
									'#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF',
									'#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF',
									'#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF',
									'#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF','#0003FF'],
				
			}
		]
		},

	
		});


const updateChartValue = (input, dataOrder) => {
	input.addEventListener('change', e => {
		myChart.data.datasets[0].data[dataOrder] = e.target.value;
		myChart.update();
	});
};


updateChartValue(AL, 0); 
updateChartValue(AK, 1);
updateChartValue(AZ, 2);
updateChartValue(AR, 3);
updateChartValue(CA, 4);
updateChartValue(CO, 5);
updateChartValue(CT, 6);
updateChartValue(DE, 7);
updateChartValue(DC, 8);
updateChartValue(FL, 9);
updateChartValue(GA, 10);
updateChartValue(HI, 11);
updateChartValue(ID, 12);
updateChartValue(IL, 13);
updateChartValue(IN, 14);
updateChartValue(IA, 15);
updateChartValue(KS, 16);
updateChartValue(KY, 17);
updateChartValue(LA, 18);
updateChartValue(ME, 19);
updateChartValue(MD, 20);
updateChartValue(MA, 21);
updateChartValue(MI, 22);
updateChartValue(MN, 23);
updateChartValue(MS, 24);
updateChartValue(MO, 25);
updateChartValue(MT, 26);
updateChartValue(NE, 27);
updateChartValue(NV, 28);
updateChartValue(NH, 29);
updateChartValue(NJ, 30);
updateChartValue(NM, 31);
updateChartValue(NY, 32);
updateChartValue(NC, 33);
updateChartValue(ND, 34);
updateChartValue(OH, 35);
updateChartValue(OK, 36);
updateChartValue(OR, 37);
updateChartValue(PA, 38);
updateChartValue(RI, 39);
updateChartValue(SC, 40);
updateChartValue(SD, 41);
updateChartValue(TN, 42);
updateChartValue(TX, 43);
updateChartValue(UT, 44);
updateChartValue(VT, 45);
updateChartValue(VA, 46);
updateChartValue(WA, 47);
updateChartValue(WV, 48);
updateChartValue(WI, 49);
updateChartValue(WY, 50);

 

 













 


