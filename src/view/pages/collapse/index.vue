<template>
    <div>
        <div class="caption-wrap">
            <p class="caption-title">折叠面板</p>
            <i-collapse :name="name">
                <i-collapse-item title="史蒂夫·乔布斯" name="name1">
                    <div slot="content">
                        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                    </div>
                </i-collapse-item>
                <i-collapse-item title="斯蒂夫·盖瑞·沃兹尼亚克" name="name2">
                    <div slot="content" i-class-content="green-text">
                        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                        Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                        Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                    </div>
                </i-collapse-item>
                <i-collapse-item title="乔纳森·伊夫" name="name3">
                    <div slot="content">
                        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                    </div>
                </i-collapse-item>
            </i-collapse>
        </div>

        <div class="caption-wrap">
            <p class="caption-title">折叠面板 - 手风琴模式</p>
            <i-collapse :name="name" accordion>
                <i-collapse-item title="史蒂夫·乔布斯" name="name1">
                    <div slot="content">
                        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                    </div>
                </i-collapse-item>
                <i-collapse-item title="斯蒂夫·盖瑞·沃兹尼亚克" name="name2">
                    <div slot="content">
                        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                        Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                        Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                    </div>
                </i-collapse-item>
                <i-collapse-item title="乔纳森·伊夫" name="name3">
                    <div slot="content">
                        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                    </div>
                </i-collapse-item>
            </i-collapse>
        </div>

        <div class="caption-wrap">
            <p class="caption-title">修改样式</p>
            <i-collapse :name="name" accordion>
                <i-collapse-item name="name1" title="史蒂夫·乔布斯" i-class-title="collapse-item-title" i-class-content="collapse-item-content">
                    <div slot="content">
                        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                    </div>
                </i-collapse-item>
                <i-collapse-item name="name2" title="斯蒂夫·盖瑞·沃兹尼亚克" i-class-title="collapse-item-title" i-class-content="collapse-item-content">
                    <div slot="content" i-class-content="green-text">
                        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                        Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                        Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                    </div>
                </i-collapse-item>
                <i-collapse-item name="name3" title="乔纳森·伊夫" i-class-title="collapse-item-title" i-class-content="collapse-item-content">
                    <div slot="content">
                        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                    </div>
                </i-collapse-item>
            </i-collapse>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: 'name1'
        }
    },
};
</script>
<style lang="less">
.caption-wrap {
  margin-bottom: 30px;
}

.caption-title {
  font-weight: bold;
  padding: 20px 10px;
}

.collapse-item-title {
  font-size: 12px;
  color: #737373;
  font-weight: bold;
}

.collapse-item-content {
  font-size: 14px;
  color: #444444;
}
</style>
