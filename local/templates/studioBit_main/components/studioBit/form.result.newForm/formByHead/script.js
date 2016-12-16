/**
 * Created by chernoyarov on 10.10.2016.
 */
$(function() {
	$("#order_form").submit(function(e) {
		e.preventDefault();
		var goal = "make_order";
		if (typeof portfolioItemCode == "string" && portfolioItemCode.length > 0) {
			goal += "_" + portfolioItemCode;
		}
		yaCounter39905280.reachGoal(goal);
		this.submit();
	});
});