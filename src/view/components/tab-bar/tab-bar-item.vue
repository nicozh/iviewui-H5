<template>
    <div class="i-class i-tab-bar-item">
        <i-badge dot :count="dot ? 0 : count ">
            <div>
                <i-icon wx:if="{{ icon || currentIcon }}" i-class="i-tab-bar-item-icon {{ current ? 'item-index--i-tab-bar-item-icon-current' : '' }}"
                    color="{{ current ? currentColor : '' }}" type="{{ current ? currentIcon : icon }}" size="22"></i-icon>
                <image wx:else class="i-tab-bar-item-img" src="{{ current ? currentImg : img }}"></image>
                <div class="i-tab-bar-item-title {{ current ? 'i-tab-bar-item-title-current' : '' }}" wx:if="{{ current && currentColor }}"
                    style="color: {{ currentColor }}">{{ title }}</div>
                <div class="i-tab-bar-item-title {{ current ? 'i-tab-bar-item-title-current' : '' }}" wx:else>{{ title
                    }}</div>
            </div>
        </i-badge>
    </div>
</template>
<script>
    export default {
        props: {
            icon: {
                type: String,
            },
            currentIcon: {
                type: String,
            },
            img: {
                type: String,
            },
            currentImg: {
                type: String,
            },
            key: {
                type: String,
            },
            title: {
                type: String,
            },
            dot: {
                type: Boolean,
                default: false
            },
            count: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                current: false,
                currentColor: ''
            }
        }
    }
</script>
<style lang="less">
    @import "../styles/_base.less";
    @import "../styles/_mixins.less";

    .i-tab-bar-item {
        flex: 1;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        text-align: center;

        &-icon {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            box-sizing: border-box;
            color: @subsidiary-color;

            &-current {
                color: @primary-color;
            }
        }

        &-img {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            box-sizing: border-box;
            width: 22px;
            height: 22px;
        }

        &-title {
            font-size: 10px;
            margin: 3px 0 0;
            line-height: 1;
            text-align: center;
            box-sizing: border-box;
            color: @subsidiary-color;

            &-current {
                color: @primary-color;
            }
        }

        &-img {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            box-sizing: border-box;
            color: @subsidiary-color;
        }
    }
</style>