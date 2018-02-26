<script type="text/javascript">
import Vue from 'vue';


var img = [
    "https://image.freepik.com/free-photo/3d-grunge-room-interior-with-spotlights-shining-down_1048-7420.jpg",
    "https://image.freepik.com/free-photo/grunge-paper-background_1048-6689.jpg",
    "https://image.freepik.com/free-vector/polygonal-lion-head_23-2147495868.jpg",
    "https://image.freepik.com/free-vector/a-nice-lion_1196-396.jpg",
    "https://image.freepik.com/free-vector/pack-of-polygonal-animal-tattoos_23-2147644640.jpg"
]


var eventBus = new Vue({
    data : {
        ImageInfor :{}
    },
    methods : {
        getList () {
            var Arr = new Array()
            for(var i=0;i<20;i++){
                var random = Math.round(Math.random() *4)
                var src = img[random]
                Arr.push({src:src,name:"이미지"+(i+1),index:i})
            }
            return Arr;
        }
    }
});

export default eventBus;

</script>