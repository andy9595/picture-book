<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<script lang="ts">
	export default {
		options: {
			styleIsolation: 'shared', // 解除样式隔离
		},
	}
</script>
<style></style>
