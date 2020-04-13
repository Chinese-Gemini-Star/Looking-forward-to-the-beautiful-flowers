/**
 * 题目对象的构造函数(稳妥构造函数形式)
 * @param {String} _title    题目
 * @param {String} _A        A选项
 * @param {String} _B        B选项
 * @param {String} _C        C选项
 * @param {String} _answer   答案
 * @param {String} _analysis 解析
 * @return {Object}          题目对象
 */
function Question(_title, _A, _B, _C, _answer, _analysis) {
	var question = new Object();
	/**
	 * 获取题目
	 * @return {String} 題目
	 */
	question.getTitle = function() {
		return _title;
	};
	/**
	 * 获取A选项
	 * @return {String} A
	 */
	question.getA = function() {
		return _A;
	};

	/**
	 * 获取B选项
	 * @return {String} B
	 */
	question.getB = function() {
		return _B;
	};

	/**
	 * 获取C选项
	 * @return {String} C
	 */
	question.getC = function() {
		return _C;
	};

	/**
	 * 获取答案
	 * @return {String} 答案
	 */
	question.getAnswer = function() {
		return _answer;
	};

	/**
	 * 获取解析
	 * @return {String} 解析
	 */
	question.getAnalysis = function() {
		return _analysis;
	};

	/**
	 * 判斷作答是否正確
	 * @return {boolean} 是否正確
	 */
	question.isRight = function(answer) {
		return _answer == answer;
	};

	return question;
}

/**
 * 题库
 */
var questionBank;

/**
 * 主函数,用于给题库添加题目
 * @return {int} 0
 */
(function() {
	var question1 = Question(
		"出现什么症状可能感染了新型冠状病毒？",
		"流鼻涕、打喷嚏",
		"腹泻、食欲不振",
		"发热、乏力、干咳、呼吸困难等",
		"C",
		"人感染新型冠状病毒后的症状严重程度取决于病毒的类型以及人体的免疫水平，常见的有发热、咳嗽，呼吸急促或呼吸困难，更严重是会导致急性呼吸窘迫综合征、脓毒性休克等，可导致患者死亡。"
	);

	var question2 = Question(
		"新型冠状病毒肺炎最长的潜伏期是多久？",
		"10天",
		"14天",
		"30天",
		"B",
		"基于目前的流行病学调查，该病潜伏期一般为3-7天，最短的潜伏期为一天发病，最长的潜伏期是14天。"
	);

	var question3 = Question(
		"下列哪种口罩可以有效过滤新型冠状病毒?",
		"N95口罩/医用外科口罩",
		"棉布口罩",
		"普通一次性口罩",
		"A",
		"棉布口罩只能阻挡发丝粗细的颗粒物，普通一次性口罩仅能过滤粉尘、花粉等较大颗粒物，这两类口罩均不推荐使用。"
	);

	var question4 = Question(
		"外出佩戴口罩一般多久需更换一次？",
		"2-4小时",
		"12小时",
		"24小时",
		"A",
		"从密封袋刚取出来的口罩是无菌且不附有过多适合病原体生长的微环境的，随着佩戴时间的延长，会逐渐形成适合病原体生长的培养物质，所以病原体在口罩表面的生长速度会随着滋生环境的改善而逐渐加快，所以口罩在病原体加速度生长的拐点到来之前丢弃最为合适，这个时间经测算最好不要超过4个小时，否则微生物可渗透入内表面导致口罩内表面细菌超标。"
	);

	var question5 = Question(
		"\"新型冠状病毒感染的肺炎\"可能的传播途径\r\n为？",
		"飞沫传播和接触传播",
		"接触传播和血液传播",
		"性传播和血液传播",
		"A",
		"通常病毒传播主要有3种传播方式。一是飞沫传播：通过咳嗽、打喷嚏、说话等产生的飞沫进入易感黏膜表面；二是接触传播，在接触感染者接触过的东西后触碰自己的嘴、鼻子或眼睛导致病毒传播；三是空气传播：病原体能在长时间远距离散播后仍具有传染性。对于新型冠状病毒，以上3种传播途径的隔离防护措施都要做好。"
	);

	var question6 = Question(
		"用过的口罩应该如何处理？",
		"随地乱扔",
		"扔到垃圾桶",
		"用75%的酒精喷雾消毒后单独密封处理",
		"C",
		"在上海等实施垃圾分类的城市，建议把用过的口罩单独放在塑料袋等密封袋里。把密封袋投放到\"有害垃圾\"桶里。在其他尚未实施垃圾分类的城市，口罩废弃物应用高温和医用75%的酒精消毒后装在袋子里密封再丢弃。"
	);

	var question7 = Question(
		"同学喊你春节期间聚餐，你应该？",
		"欣然同意",
		"选在人少的地方聚餐",
		"拒绝，并建议他取消聚餐",
		"C",
		"探亲访友、外出旅游购物人员流动频繁会增加传染病的传播风险，为做好新型冠状病毒感染预防，市民们应加强个人防护，避免前往人群密集的公共场所，避免接触发热呼吸道感染病人。"
	);

	var question8 = Question(
		"父母有急事需外出而又不想佩戴口罩，你应\r\n该如何做？",
		"无需大惊小怪，疫情离我们很远",
		"劝告父母，实在不听就算了",
		"警告父母，必须佩戴符合标准的口罩",
		"C",
		"面对新型肺炎疫情，许多非湖北籍父母不当回事：不戴口罩、频繁进出人流密集场所、筹划家族聚餐和走亲戚......为此我们应该强烈劝阻，紧急情况下和反映给当地疫情主管部门，进行强制劝阻。"
	);

	var question9 = Question(
		"医用外科口罩佩戴的正确姿势是？",
		"佩戴舒适即可",
		"有金属条的一端朝上",
		"有金属条的一端朝下",
		"B",
		"医用外科口罩有三层，且有里外之分，浅色面有吸湿功能，应该贴着嘴鼻，使深色面朝外。有金属片的一端朝上，切记不要戴反，根据自己的脸型，将折面充分展开，把鼻、嘴、下颚完全包住，然后夹紧鼻甲，使口罩与面部完全贴合。"
	);

	var question10 = Question(
		"在新型肺炎爆发的当下，该怎么做才能保护\r\n好自己？",
		"勤洗手，多锻炼",
		"少出门，戴口罩",
		"以上都是",
		"C",
		"目前该病尚无有效治疗方法，预防与隔离是最有效途径，首先要避免前往人群密集场所，在公共场合戴口罩，其次要注意勤洗手，讲卫生，多锻炼，增强体质。"
	);

	questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
	// console.log(test());
	return 0;
})();

/**
 * 测试代码
 * @return {int} 0
 */
function test() {
	for (var i = 0; i < questionBank.length; i++) {
		console.log("第" + (i + 1) + "题");
		console.log(questionBank[i].getTitle());
		console.log(questionBank[i].getA());
		console.log(questionBank[i].getB());
		console.log(questionBank[i].getC());
		console.log(questionBank[i].getAnswer());
		console.log(questionBank[i].getAnalysis());
	}
	return 0;
}