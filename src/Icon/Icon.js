import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '../icons';
import * as sizes from '../styles/sizes.json';

const getIconSize = (size) => {
  switch (size) {
    case 'xs':
      return `${sizes.xs}px`;
    case 's':
      return `${sizes.s}px`;
    case 'm':
      return `${sizes.m}px`;
    case 'l':
      return `${sizes.l}px`;
    case 'xl':
      return `${sizes.xl}px`;
    case 'xxl':
      return `${sizes.xxl}px`;
    case 'xxxl':
      return `${sizes.xxxl}px`;
    default:
      return `${sizes.xs}px`;
  }
};

export default function Icon({ color, icon, size }) {
  const iconSize = getIconSize(size);

  return React.createElement(Icons[icon], {
    fill: color,
    height: iconSize,
    width: iconSize,
  });
}

Icon.propTypes = {
  size: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  color: PropTypes.string,
  icon: PropTypes.oneOf([
    'ActionAddToFavoritesSvg',
    'ActionArchiveSvg',
    'ActionArrangeLeftSvg',
    'ActionArrangeRightSvg',
    'ActionArrangeVerticalCenterSvg',
    'ActionBreakSymbolSvg',
    'ActionChangeProjectGroupSvg',
    'ActionCloneSvg',
    'ActionCloseSvg',
    'ActionDetachingHandlerSvg',
    'ActionDisableSvg',
    'ActionDistributeVerticallySvg',
    'ActionDuplicateSvg',
    'ActionElementAlignCenterSvg',
    'ActionElementAlignSvg',
    'ActionElementFlipSvg',
    'ActionEnableSvg',
    'ActionExitSvg',
    'ActionFullScreenSvg',
    'ActionInsertDataSvg',
    'ActionLogOutSvg',
    'ActionMoveBehindSvg',
    'ActionMoveBySvg',
    'ActionMoveForwardSvg',
    'ActionMoveToBackSvg',
    'ActionMoveToFrontSvg',
    'ActionMoveToSvg',
    'ActionMultipropertyLockSvg',
    'ActionMultipropertyUnlockBordersSvg',
    'ActionMultipropertyUnlockCornersSvg',
    'ActionNextStateSvg',
    'ActionPathBreakSvg',
    'ActionPathDefaultSvg',
    'ActionPathDifferenceSvg',
    'ActionPathIntersectSvg',
    'ActionPathSubtractSvg',
    'ActionPathUnionSvg',
    'ActionPreviousStateSvg',
    'ActionRemoveFromGroupSvg',
    'ActionSetContentSvg',
    'ActionSwitchSvg',
    'ActionSymbolSyncSvg',
    'ActionUnarchiveSvg',
    'AdjustSettingsSvg',
    'AdvancedAnimationSvg',
    'AngleSvg',
    'ArrowAxisSvg',
    'ArrowEnterSvg',
    'ArrowGoBackSvg',
    'ArrowPlaySvg',
    'ArrowRedoSvg',
    'ArrowRepeatSvg',
    'ArrowReplaceSvg',
    'ArrowRetrieveSvg',
    'ArrowRotateSvg',
    'ArrowShowSvg',
    'ArrowSizeSvg',
    'ArrowThinSvg',
    'ArrowUndoSvg',
    'ArrowSvg',
    'BrandAppleSvg',
    'BrandGoogleSimpleSvg',
    'BrandGoogleSvg',
    'BrandSketchSvg',
    'BrandSlackSvg',
    'BrandTwitterSvg',
    'BrandTypekitSvg',
    'BrandUxpinSvg',
    'BrandWindowsSvg',
    'BuildingSvg',
    'CalendarSvg',
    'ChangelogSvg',
    'ChevronSvg',
    'ClockSvg',
    'CodeBlockSvg',
    'CodeInlineSvg',
    'ColorDropSvg',
    'ColorsDropperSvg',
    'ColorsSchemesSvg',
    'ColorsSwatchesSvg',
    'ConnectionConnectedSvg',
    'ConnectionDisconnectedSvg',
    'CursorCrosshairSvg',
    'CursorDefaultSvg',
    'CursorPointerSvg',
    'DesktopAppSvg',
    'DotsSvg',
    'ElementsBoxSvg',
    'ElementsButtonSvg',
    'ElementsCheckboxSvg',
    'ElementsCircleSvg',
    'ElementsCodeComponentSvg',
    'ElementsElementSvg',
    'ElementsGenericSvg',
    'ElementsGroupingSvg',
    'ElementsHotspotSvg',
    'ElementsIconSvg',
    'ElementsImageSvg',
    'ElementsInputSvg',
    'ElementsMultiSelectSvg',
    'ElementsMultistatesEditSvg',
    'ElementsMultistatesSvg',
    'ElementsPathSvg',
    'ElementsRadioSvg',
    'ElementsSelectListSvg',
    'ElementsSliceSvg',
    'ElementsSymbolSvg',
    'ElementsTableSvg',
    'ElementsTextBlockSvg',
    'ElementsTextElementSvg',
    'ElementsTextareaSvg',
    'ElementsUngroupingSvg',
    'ElementsVideoSvg',
    'EndpointEmptyCircleSvg',
    'EndpointEmptyRectangleSvg',
    'EndpointEmptyRhombSvg',
    'EndpointEmptyTriangleSvg',
    'EndpointFilledArrowSvg',
    'EndpointFilledCircleSvg',
    'EndpointFilledRectangleSvg',
    'EndpointFilledRhombSvg',
    'EndpointFilledTriangleSvg',
    'EndpointLineSvg',
    'EndpointMirroredTriangleSvg',
    'EndpointNoneSvg',
    'EndpointOpenedTriangleSvg',
    'ExternalLinkSvg',
    'FeatureAnimationsSvg',
    'FeatureApprovalSvg',
    'FeatureChatSvg',
    'FeatureCommentsSvg',
    'FeatureDocumentationSvg',
    'FeatureGridSvg',
    'FeatureIterationSvg',
    'FeatureLayersSvg',
    'FeatureLivePresentationSvg',
    'FeatureMobileSvg',
    'FeatureResponsiveSvg',
    'FeatureSitemapSvg',
    'FeatureUsabilityTestingSvg',
    'FilesDownloadCloudSvg',
    'FilesUploadSvg',
    'FolderClosedOutlineSvg',
    'FolderClosedSvg',
    'FolderOpenedSvg',
    'GearSvg',
    'HeartSvg',
    'InfoSimpleSvg',
    'InfoWarningSvg',
    'LaptopSvg',
    'LayoutListSvg',
    'LayoutMediumTileSvg',
    'LayoutSmallTileSvg',
    'LibrariesDesignLibrariesSvg',
    'LibrariesMoreSvg',
    'LibrariesSimpleSvg',
    'LinkChainBreakSvg',
    'LinkChainSvg',
    'ListIndentationAddSvg',
    'ListIndentationRemoveSvg',
    'ListOrderedSvg',
    'ListUnorderedSvg',
    'MailSvg',
    'MaskSvg',
    'MinusOutlineSvg',
    'OpacitySvg',
    'OptionsViewSvg',
    'PadlockBrokenSvg',
    'PadlockLockedSvg',
    'PadlockUnlockedSvg',
    'PenToolSvg',
    'PencilSvg',
    'PiggyBankSvg',
    'PinMapSolidSvg',
    'PinMapSvg',
    'PinSimpleSvg',
    'PluginsSvg',
    'PlusOutlineSvg',
    'PlusSvg',
    'QuestionMarkSolidSvg',
    'QuestionMarkSvg',
    'ScrollToSvg',
    'SearchSvg',
    'ShapeDiamondSvg',
    'ShapeRhombusSvg',
    'ShapeStarSvg',
    'ShapeTriangleRightAngledSvg',
    'ShapeTriangleSvg',
    'ShareClosedSvg',
    'ShareOpenedSvg',
    'ShoppingCartSvg',
    'SoundMuteSvg',
    'SoundUnmuteSvg',
    'StateBaseSvg',
    'StatusApprovedSvg',
    'StatusPausedSvg',
    'StatusProgressSvg',
    'StatusRejectedSvg',
    'StatusWaitingSvg',
    'StrokeEndButtSvg',
    'StrokeEndRoundSvg',
    'StrokeEndSquareSvg',
    'StrokeJoinBevelSvg',
    'StrokeJoinMiterSvg',
    'StrokeJoinRoundSvg',
    'StrokePointAsymmetricSvg',
    'StrokePointDisconnectedSvg',
    'StrokePointMirroredSvg',
    'StrokePointStraightSvg',
    'ThunderSvg',
    'TickerSvg',
    'ToggleSvg',
    'TooltipLeftSvg',
    'TooltipTopSvg',
    'TrashSvg',
    'TypographyAlignCenterSvg',
    'TypographyAlignJustifySvg',
    'TypographyAlignLeftSvg',
    'TypographyCustomFontSvg',
    'TypographyFontSizeSvg',
    'TypographyLetterSpacingSvg',
    'TypographyLineHeightSvg',
    'UserAddSvg',
    'UserSimpleSvg',
    'VariableSvg',
    'VisibilityOutlineHiddenSvg',
    'VisibilityOutlineVisibleSvg',
    'VisibilitySolidHiddenSvg',
    'VisibilitySolidVisibleSvg',
  ]),
};
