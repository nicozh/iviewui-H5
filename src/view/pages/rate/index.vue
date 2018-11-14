<template>
    <div>
        <i-cell-group>
            <i-cell title="基本用法">
                <i-rate @change="onChange1" v-model="starIndex1">
                </i-rate>
            </i-cell>
            <i-cell title="自定义星星个数">
                <i-rate @change="onChange5" :count="10" v-model="starIndex5">
                </i-rate>
            </i-cell>
            <i-cell title="自定义星星大小">
                <i-rate @change="onChange2" v-model="starIndex2" :size="32">
                </i-rate>
            </i-cell>
            <i-cell title="自定义文字说明">
                <i-rate @change="onChange2" v-model="starIndex2">
                    {{starIndex2}}星
                </i-rate>
            </i-cell>
            <i-cell title="手势touch选择星">
                <i-rate @change="onChange3" v-model="starIndex3">
                    {{starIndex3}}星
                </i-rate>
            </i-cell>
            <i-cell title="禁用点击和手势选择星">
                <i-rate :disabled="true" v-model="starIndex4">
                    {{starIndex4}}星
                </i-rate>
            </i-cell>
        </i-cell-group>
    </div>
</template>
<script>
export default {
  data() {
    return {
      starIndex1: 0,
      starIndex2: 0,
      starIndex3: 0,
      starIndex4: 4,
      starIndex5: 5
    };
  },
  methods: {
    onChange1(index) {
      console.log(index);
    },
    onChange2(index) {
      console.log(index);
    },
    onChange3(index) {
      console.log(index);
    },
    onChange5(index) {
      console.log(index);
    }
  }
};
</script>
