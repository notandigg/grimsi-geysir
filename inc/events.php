<koken:loop>
    <koken:event>
        <!-- Album -->
        <koken:if true="settings.timeline_album">
            <koken:include file="inc/timeline/timeline_album.html" />
        </koken:if>

        <!-- Album update -->
        <koken:if true="settings.timeline_album_update">
            <koken:include file="inc/timeline/timeline_album_update.html" />
        </koken:if>

        <!-- Content -->
        <koken:if true="settings.timeline_content">
            <koken:include file="inc/timeline/timeline_content.html" />
        </koken:if>

        <!-- Essay -->
        <koken:if true="settings.timeline_essay">
            <koken:include file="inc/timeline/timeline_essay.html" />
        </koken:if>
    </koken:event>
</koken:loop>
<koken:include file="inc/loading.html" />
